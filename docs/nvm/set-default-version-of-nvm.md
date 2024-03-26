# How to set default version of the NVM?

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

::: code-group
``` shell[specific version]
nvm alias default v20.2.0
```

``` shell[latest installed XX.X.X version]
nvm alias default v20
```
``` shell[latest installed version]
nvm alias default node
```
:::

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
