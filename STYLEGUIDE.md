# Style guide

## CSS

TODO2: Make everything actually follow these guidelines.

- Put classes in alphabetical order.
- Nest compound classes using `&`

    For example, instead of:
    ```
    .hero {}
    .hero__bg {}
    ```
    ...do this:
    ```
    .hero {
        &__bg {}
    }
    ```

- Use compound classes

    e.g. `<div class="hero"><img class="hero__bg"></div>

    This makes the CSS better reflect the structure of the HTML.

    Start a new compound class when an element is stylistically independent of its parent. Hard rule to enforce; you sorta know it when you see it.

- Prefix scoped/component classes with `_`

    This way it's easier to tell in HTML whether a class is global or local.

- In HTML, put scoped/component classes after global classes

    e.g. `<div class="global _local">`. Local classes should override global classes.

- Nest `@media` inside a compound class's topmost element, if possible.

    e.g. `.foo { @media ... }` instad of `@media { .foo ... }`. The exception is if a media query targets multiple unrelated elements. This makes it easier to see what media queries target.
