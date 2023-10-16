# Configure Fish Shell for NPM

```fish
npm config get prefix
```

output will be

```fish
/Users/username/.nvm/versions/node/v20.2.0/
```

add this to end of the file

::: code-group
```fish [/Users/username/.config/fish/config.fish]
set PATH /Users/username/.nvm/versions/node/v20.2.0/bin $PATH
```
:::
