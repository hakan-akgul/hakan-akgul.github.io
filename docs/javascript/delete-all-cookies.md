Add custom html to Google Tag Manager  

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
