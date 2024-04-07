---
title: Configure Fish Shell for bun
description: Configure Fish Shell for bun
---

add this to end of the file

```bash title="/Users/<username>/.config/fish/config.fish"
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH
```
