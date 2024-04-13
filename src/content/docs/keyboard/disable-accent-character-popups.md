---
title: Disable accent character popups in macos
description: Disable accent character popups in macos
keywords:
  - macos
lastUpdated: 2024-04-12
---

I edited these settings to increase browsing speed  
![Macos keyboard settings](../../../assets/image/macos-keyboard-settings.png)  

But I faced with this annoying popup  
![Keyboard popup](../../../assets/image/macos-accent-popup.jpeg)

To prevent:
``` shell
defaults write -g ApplePressAndHoldEnabled -bool false
```

:::caution
Need to logout
:::

You can enable again via:
``` shell
defaults write -g ApplePressAndHoldEnabled -bool true
```
