showa
=====

**s**how/**h**ide **o**ne **w**ay or **a**nother  

## Getting Started

In your web page include:  

```html
<script src="jquery.js"></script>
<script src="showa.js"></script>
```
Example
-----------

And add some Elements:  
```html
<span class="animal" id="rabbit">Bugs Bunny</span>
<span class="animal" id="bird">Flamingo</span>
<span class="human" id="jane">Jane Doe</span>

<script>
//animals
showa.addElement(".animal", true);
showa.addElement("#rabbit", true);
showa.addElement("#bird", true);
//humans
showa.addElement(".human", true);
showa.addElement("#jane", true);
</script>
```

Now run:  

```js
/**
 * @param {string} way to show/hide
 * @param {string} selector
 */
showa.do('showOnly', '#bird');
```

## Documentation

**Available Options:**  
* showOnly -> show selected and hide all others
* showOne -> show selected
* hideOnly -> hide selected and show all others
* hideOne -> hide selected  
* reversAll -> show all Hidden and hide all Shown  


**Add element:**  
```js
/**
 * @param {string} selector
 * @param {bool} state show=true, hide=false
 */
showa.addElement(".human", false);
```

**Remove element:**  
```js
/**
 * @param {string} selector
 */
showa.rmElement(".human");
```

##Tip

```js
var showa2 = new Showa();
```

--------------------------

### [License (MIT)](LICENSE)