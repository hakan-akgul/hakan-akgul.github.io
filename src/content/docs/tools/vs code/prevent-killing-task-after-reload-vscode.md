---
title: Prevent killing vscode tasks after reloading vscode
description: Prevent killing vscode tasks after reloading vscode
lastUpdated: 2024-04-12T17:18:50.566Z
---

I generally using tasks for simplifying development process.  
But some reasons I need to reload the vscode (extension update, freezing etc.) and running task are gone.  
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
