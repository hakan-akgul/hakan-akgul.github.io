```zsh
npm config get prefix
```

output will be

```zsh
/Users/<user-name>/.nvm/versions/node/v20.2.0/
```

add this to end of the file

::: code-group
```zsh [/Users/<user-name>/.config/fish/config.fish]
set PATH /Users/<user-name>/.nvm/versions/node/v20.2.0/bin $PATH
```
:::
