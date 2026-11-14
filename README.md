# 🪟 Vision Glass Theme for Home Assistant

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=adromir&repository=ha-vision-glass-theme&category=theme)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/adromir)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![GitHub Release](https://img.shields.io/github/v/release/adromir/ha-vision-glass-theme?style=for-the-badge&color=blue)](https://github.com/adromir/ha-vision-glass-theme/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/adromir/ha-vision-glass-theme)

An ultra-modern, elegant translucent **Glassmorphism Theme** for Home Assistant, inspired by Apple VisionOS and macOS design aesthetics. Features seamless support for both a bright, airy **Day/Light Mode** and a deep, atmospheric **Night/Dark Mode**.

---

## ✨ Key Features & Advantages

- 💎 **Authentic Frosted Glass (Glassmorphism)**: True hardware-accelerated `backdrop-filter: blur(25px) saturate(180%)` across cards, headers, and dialogs.
- 🌓 **3 Dedicated Theme Variants**:
  - `Vision Glass Light`: Guaranteed Day/Light mode with luminous sky gradient and frosted white glass cards (ignores OS dark mode preference).
  - `Vision Glass Dark`: Guaranteed Night/Dark mode with deep midnight gradient and slate glass cards.
  - `Vision Glass`: Adaptive theme using Home Assistant's native `modes: light / dark` system.
- 🧼 **Clean Translucent Controls**: Replaces standard opaque brown/grey form inputs, dropdowns, and sliders with subtle translucent glass pills (`mdc-shape-small: 14px`).
- 📐 **Harmonious Squircles (`22px` Border Radius)**: Smooth, rounded cards matching modern spatial operating system guidelines.
- 🌌 **Zero External Dependencies**: High-performance CSS radial atmospheric backgrounds render instantly offline without broken CDN image links or tracking.
- 🧩 **Built-in `card-mod` Integration**: Directly integrates with `lovelace-card-mod` for global glassmorphism effects across all standard Lovelace cards without extra card-by-card styling.

---

## 📸 Variants Overview

| Variant | Purpose | Visual Character |
| :--- | :--- | :--- |
| **`Vision Glass Light`** | Daytime / Bright Rooms | Airy daylight sky atmosphere with frosted white cards and crisp slate text |
| **`Vision Glass Dark`** | Night / OLED Displays | Deep midnight atmosphere with translucent dark glass cards and cyan accents |
| **`Vision Glass`** | Automatic Switching | Follows your Home Assistant / OS color preference automatically |

---

## 📦 Installation

### Method 1: HACS (Recommended)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=adromir&repository=ha-vision-glass-theme&category=theme)

1. Ensure [HACS](https://hacs.xyz/) is installed in your Home Assistant instance.
2. In Home Assistant, open **HACS** > **Themes** (or **Frontend**).
3. Click the three dots in the top right corner and select **Custom repositories**.
4. Enter the repository URL:
   ```
   https://github.com/adromir/ha-vision-glass-theme
   ```
5. Select category: **Theme**.
6. Click **Add**, find **Vision Glass Theme**, and click **Download**.
7. Reload your themes via **Developer Tools** > **YAML** > **Themes reload**.

### Method 2: Manual Installation

1. Copy `themes/vision_glass.yaml` into your Home Assistant `themes/` folder:
   ```
   /config/themes/vision_glass.yaml
   ```
2. Make sure your `configuration.yaml` includes:
   ```yaml
   frontend:
     themes: !include_dir_merge_named themes
   ```
3. Reload your frontend themes via **Developer Tools** > **YAML** > **Reload Themes**.

---

## 🚀 Usage & Recommendations

### Select Theme in User Profile
1. Click your profile icon at the bottom of the Home Assistant sidebar.
2. Under **Theme**, choose:
   - **`Vision Glass Light`** if you want the guaranteed Day Mode regardless of your browser's dark mode.
   - **`Vision Glass Dark`** for the guaranteed Night Mode.
   - **`Vision Glass`** for system-synchronized switching.

### Optional: Automatic Day/Night Sun Automation
To automatically switch themes at sunrise and sunset:
```yaml
automation:
  - alias: "Vision Glass Theme Day/Night"
    trigger:
      - trigger: sun
        event: sunset
      - trigger: sun
        event: sunrise
    action:
      - action: frontend.set_theme
        data:
          name: >-
            {% if is_state('sun.sun', 'above_horizon') %}
              Vision Glass Light
            {% else %}
              Vision Glass Dark
            {% endif %}
```

---

## 📄 License & Disclaimer

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

**Disclaimer**: This theme is an independent community project and is not affiliated with or endorsed by Apple Inc. or Home Assistant / Nabu Casa.

---

## 👤 Author

Developed by **Adromir**  
Website: [https://github.com/adromir](https://github.com/adromir)
