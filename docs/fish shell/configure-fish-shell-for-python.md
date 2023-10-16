# Install python via pyenv on fish shell

``` fish
brew install pyenv
```
``` fish
pyenv install 3.9.2
```

``` fish
alias brew="env PATH=(string replace (pyenv root)/shims '' \"\$PATH\") brew"
```
