---
title: 256 vs 16 Million Colors
description: why I choose minimal monochromes over poisonous polychromatic
slug: 256-vs-16M-colors
date: May 21, 2020
---

> The 256 Shades of Grey

<small>this complete website including all the images use only the shades of grey, not all 256</small>

When it comes to design, we are all going to face the question of "which color?", sooner or later. Picking a color palette is a pain and is the hardest choice we have to make, and it will be the main issue if anything goes wrong with the overall design.

Looking at it from a designer's perspective, there are **16,777,216** color combinations possible considering the hex code for making colors. There is so much variance available to us, but who knew that there would be so many shades of black and white, that I might end up liking.

Using monochromes highlights the unifying theme and simplifies the complexity behind the ideas through the harmony of monochromes.

I started with one color i.e. `#F5F5F5` and played with various shades, tones, and tints that can be created from it, which led me to find some warm and cool colors. I tried them too, but later, converted them to B/W by applying a simple filter and later saving those monochrome values.


Currently, these are the colors, that I am using for the light theme of my website, which brings me to another important aspect of designing, that's the **dark mode**.

```css
[data-theme='light'] {
  /* Colors  */
  --bg-a: #FFFFFF;
  --bg-b: #F5F5F5;
  --bg-t: rbga(255, 255, 255, 0.7);
  --fg-a: #000000;
  --fg-b: #111111;

  --gr-a: #CCCCCC;
  --gr-b: #777777;
  --gr-c: #555555;

  --sc-a: #CCCCCC;
  --sc-b: #AAAAAA;

  --header-b: rgba(245, 245, 245, 0.8);

  --selection: rgba(0, 0, 0, 0.99);

  --hg: #aeaeae;
}
```

Later, I created all the inverts of the light theme of colors, starting with `#111111` as the primary color. I tried to build a similar warm and cool color palette for the dark mode too, and later converted them into monochromes. You can view the dark mode and light mode and understand the elegance of monochromes.

```css
{
:root {
  /* Colors  */
  --bg-a: #000000;
  --bg-b: #111111;
  --bg-t: rbga(0, 0, 0, 0.4);
  --fg-a: #FFFFFF;
  --fg-b: #F5F5F5;

  --gr-a: #424242;
  --gr-b: #818181;
  --gr-c: #969696;

  --sc-a: #333333;
  --sc-b: #555555;

  --hg: #2e2e2e;

  --selection: rgba(255, 255, 255, 0.99);

  --header-b: rgba(17, 17, 17, 0.7);
}
```
