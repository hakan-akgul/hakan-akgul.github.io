---
title: Configure fish shell for bun
description: Configure fish shell for bun
tags:
  - terminal
categories:
  - terminal
lastUpdated: 2024-04-12
---

add this to end of the file

```bash title="/Users/<username>/.config/fish/config.fish"
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH
```
