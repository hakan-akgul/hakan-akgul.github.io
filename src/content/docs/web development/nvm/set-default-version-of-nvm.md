---
title: How to set default version of the nvm?
description: How to set default version of the nvm?
sidebar:
  label: Set default version of nvm
categories:
  - terminal
lastUpdated: 2024-04-12
---

```shell
node -v
```

```
v18.18.0
```

``` shell
nvm list
```

```
v18.15.0
v18.18.0
v20.2.0
```

``` shell title="specific version"
nvm alias default v20.2.0
```

``` shell title="latest installed XX.X.X version"
nvm alias default v20
```
``` shell title="latest installed version"
nvm alias default node
```

```
default -> v20.2.0
```


``` shell
nvm use default
```

```
Now using node v20.2.0 (npm v9.6.6)
```

```shell
node -v
```

```
v20.2.0
```
