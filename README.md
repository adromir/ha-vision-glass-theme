# 🪟 Vision Glass Theme for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![GitHub Release](https://img.shields.io/github/v/release/adromir/ha-vision-glass-theme?style=for-the-badge&color=blue)](https://github.com/adromir/ha-vision-glass-theme/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/adromir/ha-vision-glass-theme)

An ultra-modern, elegant translucent **Glassmorphism Theme** for Home Assistant, inspired by Apple VisionOS and macOS design aesthetics. Features seamless automatic switching between a bright, airy **Light Mode** and a deep, atmospheric **Dark Mode**.

---

## ✨ Key Features & Advantages

- 💎 **Authentic Frosted Glass (Glassmorphism)**: Cards feature hardware-accelerated `backdrop-filter: blur(24px) saturate(180%)` with subtle inner highlights and border glows.
- 🌓 **Dynamic Day & Night Transitions**: Full native support for Home Assistant `modes: light / dark`. Synchronizes automatically with your system settings or sun elevation.
- 📐 **Harmonious Squircles (`24px` Border Radius)**: Smooth, rounded cards matching modern mobile and desktop operating system guidelines.
- 🌌 **Zero External Dependencies**: High-performance CSS radial atmospheric backgrounds render instantly offline without broken CDN image links or tracking.
- 📱 **Responsive & Mobile-Ready**: Crafted to look stunning on phones, wall-mounted tablets, and wide desktop dashboards alike.
- 🎨 **Popup & Modal Polish**: Enhanced backdrop blur and styling for Home Assistant dialogs, more-info popups, and sidebar navigation.

---

## 📸 Screenshots

| Light Mode | Dark Mode |
| :---: | :---: |
| *Airy daylight atmosphere with frosted white cards* | *Deep midnight atmosphere with slate glass cards* |

---

## 📦 Installation

### Method 1: HACS (Recommended)

1. Ensure [HACS](https://hacs.xyz/) is installed in your Home Assistant instance.
2. In Home Assistant, open **HACS** > **Themes** (or **Frontend**).
3. Click the three dots in the top right corner and select **Custom repositories**.
4. Enter the repository URL:
   ```
   https://github.com/adromir/ha-vision-glass-theme
   ```
5. Select category: **Theme**.
6. Click **Add**, find **Vision Glass Theme**, and click **Download**.
7. Restart Home Assistant or reload themes via Developer Tools > YAML > Frontend Themes.

### Method 2: Manual Installation

1. Copy the file `themes/vision_glass.yaml` into your Home Assistant configuration directory under `themes/`:
   ```
   /config/themes/vision_glass.yaml
   ```
2. Make sure your `configuration.yaml` includes the themes folder:
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
3. Reload your frontend themes via **Developer Tools** > **YAML** > **Reload Themes**.

---

## 🚀 Usage

### Select Theme in User Profile
1. Click your profile icon at the bottom of the Home Assistant sidebar.
2. Under **Theme**, choose **Vision Glass**.
3. Set your preferred mode (Auto, Light, or Dark). In **Auto** mode, Home Assistant seamlessly shifts between Day and Night.

### Set as Backend Default (Optional)
To set Vision Glass as the global default theme for all users and guests, add an automation or call the service:
```yaml
service: frontend.set_theme
data:
  name: Vision Glass
```

---

## 🛠️ Customization & Backgrounds

The theme uses native CSS gradients by default. If you prefer custom wallpaper images, you can set the `lovelace-background` property in your dashboard settings or override it in `themes/vision_glass.yaml`:

```yaml
lovelace-background: 'center / cover no-repeat fixed url("/local/my-wallpaper.jpg")'
```

---

## 📄 License & Disclaimer

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

**Disclaimer**: This theme is an independent community project and is not affiliated with or endorsed by Apple Inc. or Home Assistant / Nabu Casa.

---

## 👤 Author

Developed by **Adromir**  
Website: [https://github.com/adromir](https://github.com/adromir)
