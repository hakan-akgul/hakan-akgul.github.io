---
title: Install python via pyenv on fish shell
description: Install python via pyenv on fish shell
sidebar:
  label: Configure fish shell for python
tags:
  - terminal
categories:
  - terminal
lastUpdated: 2024-04-12
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
