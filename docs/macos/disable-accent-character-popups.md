# Disable accent character popups in macos

I edited these settings to increase browsing speed  
![Macos keyboard settings](/image/macos-keyboard-settings.png)  

But I faced with this annoying popup  
![Keyboard popup](/image/macos-accent-popup.jpeg)

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
