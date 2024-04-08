---
title: Configure Fish Shell for NPM
description: Configure Fish Shell for NPM
tags:
  - terminal
categories:
  - terminal
---

```bash
npm config get prefix
```

output will be

```bash
/Users/username/.nvm/versions/node/v20.2.0/
```

add this to end of the file

```bash title="/Users/username/.config/fish/config.fish"
set PATH /Users/username/.nvm/versions/node/v20.2.0/bin $PATH
```
