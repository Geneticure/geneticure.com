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

- Prefix scoped/component classes with `_`

    This way it's easier to tell in HTML whether a class is global or local.
