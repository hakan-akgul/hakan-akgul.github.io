---
title: Install python via pyenv on fish shell
description: Install python via pyenv on fish shell
---

```bash
brew install pyenv
```
```bash
pyenv install 3.9.2
```

```bash
alias brew="env PATH=(string replace (pyenv root)/shims '' \"\$PATH\") brew"
```
