# Configure Fish Shell for bun

add this to end of the file

::: code-group

```fish [/Users/username/.config/fish/config.fish]
# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH
```

:::
