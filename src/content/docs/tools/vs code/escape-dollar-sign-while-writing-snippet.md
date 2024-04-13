---
title: Escaping dollar sign ($) while writing VS Code snippets
description: Escaping dollar sign ($) while writing VS Code snippets
sidebar:
  label: Escaping dollar sign in VS Code snippets
keywords:
  - vs  code
  - snippet
lastUpdated: 2024-04-12
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
