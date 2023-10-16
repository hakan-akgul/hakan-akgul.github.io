# Delete all cookies after user disable consent settings

::: info
I recommend to delete all cookies when users want to disable consent settings or if they haven't yet accepted cookies.
:::

- To add custom HTML to Google Tag Manager, follow these steps:
- Log in to your Google Tag Manager account.
- Go to the container where you want to add the custom HTML.
- Click on "Tags" in the left sidebar.
- Click on "New" to create a new tag.
- Give your tag a descriptive name.
- Select "Custom HTML" as the tag type.
- Copy and paste the provided HTML code into the "HTML" field.
- Save the tag.
- Click on "Submit" to publish the changes to your container.

::: warning
Please note that the provided HTML code appears to be a script that deletes cookies. Make sure you understand the purpose and implications of adding this code to your website before proceeding.
:::

```html
<script>

  (function () {
    var isDenied = document.cookie.includes('analytics_storage%22%3Atrue')

    if (isDenied) {
      console.warn('cookies are set')
      return
    }

    var cookies = document.cookie.split("; ");

    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';

        if (cookieBase.startsWith('app') || cookieBase.startsWith('purchase')) {
          console.warn('required : ', cookieBase)
          break
        }

        var p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        };
        d.shift();

        console.warn('deleted  : ', cookieBase)
      }
    }

    // brute force - not deleted in while loop
    document.cookie = "addshoppers.com=;expires=Thu, 01 Jan 1970 00:00:00 GMT"

    console.warn('info     :  all cookies are deleted!')
  })();

</script>

```
