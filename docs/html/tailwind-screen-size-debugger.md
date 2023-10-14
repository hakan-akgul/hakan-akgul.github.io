# Tailwind Screen Size Debugger

```html
<div>
  <div class="fixed left-0 top-2 z-100 min-w-6 text-center text-xs font-bold text-white">
    <div class="bg-gray p-1 xs:hidden">
      base
    </div>
    <div class="hidden bg-red p-1 xs:block sm:hidden">
      xs
    </div>
    <div class="hidden bg-blue p-1 sm:block md:hidden">
      sm
    </div>
    <div class="hidden bg-green p-1 md:block lg:hidden">
      md
    </div>
    <div class="hidden bg-yellow p-1 lg:block xl:hidden">
      lg
    </div>
    <div class="hidden bg-purple p-1 xl:block 2xl:hidden">
      xl
    </div>
    <div class="hidden bg-orange p-1 2xl:block">
      2xl
    </div>
  </div>
  <div class="fixed top-0 z-1000 w-screen flex justify-center">
    <div class="absolute h-1 w-screen bg-orange" />
    <div class="absolute h-1 w-screen-2xl bg-purple" />
    <div class="absolute h-1 w-screen-xl bg-yellow" />
    <div class="absolute h-1 w-screen-lg bg-green" />
    <div class="absolute h-1 w-screen-md bg-blue" />
    <div class="absolute h-1 w-screen-sm bg-red" />
    <div class="absolute h-1 w-screen-xs bg-gray" />
  </div>
</div>
```
