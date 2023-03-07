---
title: "Markdown Style Test File"
subtitle: "A scratchpad of markdown tests to make sure blog posts render correctly."
date: 1970-01-01T14:13:41-0800
hidden: true
---

This is some text that would be at the top of the file. It exists up here to make sure page excerpts are working correctly.

> You go to your TV when you want to turn your brain off. You go to your computer when you want to turn your brain on. Those are not the same.

<cite>— Steve Jobs</cite>

1. Numbered list before
2. The ~~jump~~
   - With **bullets**
   - Because _reasons_

<!-- more -->

## Headings

### Level 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit lacus, facilisis in nisi ut, imperdiet dictum augue. Suspendisse non leo vel justo convallis egestas ac quis metus. Pellentesque sem lectus, aliquet at semper et, egestas at turpis.

#### Level 4

Maecenas ultricies dignissim sapien. Suspendisse posuere tristique est nec auctor. In eu ornare ex. Integer accumsan tortor ac nisi viverra, hendrerit euismod libero convallis. Etiam dignissim hendrerit cursus. Ut quis nisl sapien. Phasellus sit amet nunc ut urna mollis convallis nec id tellus.

##### Level 5

Suspendisse in mattis risus. Nullam porttitor est quis ex commodo, a placerat est semper. Mauris arcu augue, dictum a interdum fringilla, lobortis non lacus. Nunc vitae bibendum erat.

###### Level 6

Suspendisse laoreet erat at velit sodales aliquet. Mauris lacinia augue non felis finibus, in iaculis sem euismod. Sed non aliquam lacus.

## Inline Text

This is some **bold text**. I can also write _in italics_ or—_**God forbid**_—_**both!**_

Text can also be `monospaced` or ~~strikethrough~~.

You can add [links](https://www.example.com) in a [variety] of [formats][link][^1]. But regular links should work[^named], too: https://www.example.com. [^1]

[variety]: https://www.example.com
[link]: https://www.example.com

[^1]: You can add footnotes, too!
[^named]: Footnotes can be named.

## Block Text

> Block quotes should be formatted correctly. They can also have inline styles like: **bold**, _italics_, `monospaced`, and ~~strikethrough~~. Or _~~some~~_ ~~**combination**~~ _**of them**_.
>
> They can also embed block styles like:
>
> - bulleted
> - lists
>
> Or:
>
> 1. numbered
> 2. lists
>
> Or even:
>
> ```
> code blocks
> ```
>
> > And if you're feeling really spicy, you can nest your block quotes.
>
> Phasellus consequat porttitor enim, ac rutrum urna lobortis vitae. Aenean neque urna, tristique sit amet est at, cursus dictum velit. Fusce vulputate enim ex, nec sollicitudin dolor pretium et. Praesent egestas sodales varius. Pellentesque id dignissim mauris, id vulputate felis. Integer iaculis tellus massa, quis sollicitudin orci pulvinar non. Donec pellentesque odio in porta sollicitudin.

```
This is unstyled monospace text
It doesn't have any language associated with it.

It  should  preserve  whitespace,
    but otherwise, it should be unadorned.
```

```javascript
// This is JavaScript.
// It should be syntax highlighted.
const fn = () => {
  let foo = "bar";
  let baz = 3.14159;
  Math.pow(1e17);
};
```

### Horizontal Rules

You can split your text

---

with a horizontal rule.

## Lists

### Bullets

- This is a bulleted list.
- It's _meant_ to be **unordered**.
- It can also have
  - Nested
  - Items
    - Inside

### Numbers

1. Numbered lists are fine, too.
1. They represent ordered data.
1. Just like bullets, it can have
   1. Nested
   1. Items
      1. Yep!

## Tables

|  Tables Are  | Also Supported | In Markdown |
| :----------: | :------------- | ----------: |
| With Varying | Alignments     |        Like |
|    Center    | Left and       |       Right |

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

![Alt text][id]

[id]: https://octodex.github.com/images/dojocat.jpg "The Dojocat"

## Other Stuff

> A block quote

1. Next to a number

- Next to a bullet.
