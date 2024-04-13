---
title: Configure fish shell for npm
description: Configure fish shell for npm
tags:
  - terminal
categories:
  - terminal
lastUpdated: 2024-04-12
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
