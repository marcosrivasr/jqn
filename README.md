# Native jQuery

Library to implement jQuery most popular functions with Vanilla Javascript.

## Usage

To begin using the library it's important to create a new ```El``` object to use the methods.

```javascript
let button = new El('#btn');
```

and then, apply some effect;
```javascript
button.fadeOut();
```

## Apply effects to multiple elements

if you want to get all the elements from a selector use the ```all()``` method:

```javascript
let items = new El('.items').all();
```
and then you can iterate them as usual

```javascript
let items = new El('.items').all();
items.forEach(item =>{
    // code...
});
```

## Animate
To animate different properties at the same time use ```animate()``` 

```javascript
const item = new El('#item');

item.animate({
    'color': '#fff',
    'background-color': '#000'
}, 2000);
```
