---
title: Prevent killing VS Code tasks after reloading VS Code
description: Prevent killing VS Code tasks after reloading VS Code
sidebar:
  label: Prevent killing VS Code tasks
lastUpdated: 2024-04-12
---

I generally using tasks for simplifying development process.  
But some reasons I need to reload the VS Code (extension update, freezing etc.) and running task are gone.  
Thanks to highlighted line we can prevent this:

``` json {5} title=".vscode/tasks.json"
{
	"tasks": [
		{
			"detail": "vitepress dev docs",
			"isBackground": true,
			"label": "dev",
			"problemMatcher": [],
			"script": "docs:dev",
			"type": "npm"
		}
	],
	"version": "2.0.0"
}

```
