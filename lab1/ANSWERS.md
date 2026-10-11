# Answers

## Exercise 1

Strings are immutable, so `cleanEmail(e)` returns a cleaned string without changing `e`. The value of `e` remains `" A@B.org "`.

## Exercise 2

The checks must go from the highest threshold to the lowest. If `grade >= 10` is tested first, `letter(17)` immediately returns `"D"` and never reaches the `"A"` condition.

## Exercise 3

The spread syntax copies the product into a new object before setting its price, so the original stays unchanged. Assigning to `product.price` would mutate the original product, including `products[0]`.

## Exercise 4

`querySelector("title")` selects the `<title>` element in the document head because it is a tag selector; changing it updates the browser tab title, not the `<h1>`. `#title` selects the element whose `id` is `"title"`.

## Exercise 5

Adding a sixth meal to the data array adds another list item, and the meal count updates to six. Building the page from data makes it easier to update the menu in one place without manually changing each HTML element.

## Exercise 6

With parentheses, `addOne()` runs immediately and its return value (`undefined`) is passed to `addEventListener`, rather than passing the function to run on a click. The listener therefore will not be registered correctly.

## Exercise 7

Without `preventDefault()`, submitting the form reloads the page. The list that was added only to the page disappears when the page reloads.
