import { readFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import https from 'https';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
const themePath = './themes/vision_glass.yaml';
if (!existsSync(themePath)) {
  console.error(`Error: ${themePath} not found!`);
  process.exit(1);
}
const version = 'v' + pkg.version;

let token = process.env.GITHUB_TOKEN;
if (!token && existsSync('./.token')) {
  token = readFileSync('./.token', 'utf8').trim();
}

if (!token) {
  console.error('Error: GITHUB_TOKEN environment variable or ./.token file is required.');
  process.exit(1);
}

let changelog = '';
try {
  const tags = execSync('git tag --sort=-creatordate', { encoding: 'utf8' }).trim().split('\n');
  const prevTag = tags.find(t => t && t !== version);
  if (prevTag) {
    changelog = execSync(`git log ${prevTag}..HEAD --oneline`, { encoding: 'utf8' }).trim();
  } else {
    changelog = execSync('git log -n 10 --oneline', { encoding: 'utf8' }).trim();
  }
} catch (e) {
  changelog = `Release ${version}`;
}

const releaseBody = `### Vision Glass Theme ${version}

#### Changes in this release:
${changelog.split('\n').map(l => `- ${l}`).join('\n')}
`;

console.log(`Creating GitHub Release ${version} for ${pkg.name}...`);

const payload = JSON.stringify({
  tag_name: version,
  name: `Vision Glass Theme ${version}`,
  body: releaseBody,
  draft: false,
  prerelease: false
});

const req = https.request({
  hostname: 'api.github.com',
  path: `/repos/adromir/${pkg.name}/releases`,
  method: 'POST',
  headers: {
    'User-Agent': 'NodeJS',
    'Authorization': 'token ' + token,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      const resp = JSON.parse(data);
      console.log(`✓ Release ${version} created successfully: ${resp.html_url}`);
    } else if (res.statusCode === 422) {
      console.log(`Release ${version} already exists.`);
    } else {
      console.error(`Failed to create release (${res.statusCode}): ${data}`);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.error('Network error during release:', err);
  process.exit(1);
});

req.write(payload);
req.end();
