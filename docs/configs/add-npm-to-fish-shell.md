```zsh
npm config get prefix
```

output will be

```zsh
/Users/hakan/.nvm/versions/node/v20.2.0/
```

add this to end of the file

::: code-group
```zsh [/Users/hakan/.config/fish/config.fish]
set PATH /Users/hakan/.nvm/versions/node/v20.2.0/bin $PATH
```
:::
