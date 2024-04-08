---
title: Escaping dollar sign ($) while writing VS Code snippet
description: Escaping dollar sign ($) while writing VS Code snippet
keywords:
  - vs  code
  - snippet
---

Maybe you try to write javascript template literals in a snippet
Double backslash solves the problem

``` json {7} title="~/Library/Application Support/Code/User/snippets/js.code-snippets"
{ 
  "react iterate object 🚀": {
    "body": [
      "{",
      "    Object.entries(${1:object}).map(([ key, value ],index) => (",
      "        <${2:div} key={ index }>",
      "            { `\\${key} : \\${value}` }",
      "        </${2:div}>",
      "    ))",
      "}"
    ],
    "prefix": "rio",
    "scope": "typescriptreact"
  },
}
```
