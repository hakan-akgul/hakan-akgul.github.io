---
title: Disable accent character popups in macos
description: Disable accent character popups in macos
---

I edited these settings to increase browsing speed  
![Macos keyboard settings](./src/assets/image/macos-keyboard-settings.png)  

But I faced with this annoying popup  
![Keyboard popup](./src/assets/image/macos-accent-popup.jpeg)

To prevent:
``` shell
defaults write -g ApplePressAndHoldEnabled -bool false
```

::: warning
Need to logout
:::

You can enable again via

``` shell
defaults write -g ApplePressAndHoldEnabled -bool true
```
