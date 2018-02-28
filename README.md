# real-visibility
real-visibility.js - check real visibility of [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) element (**el**).

How it works.

1. Check is document page visible or hidden via [page visibility api](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).

2. Get bounding of element by **rectPos** = **el**.[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)().

3. Get elements (by document.[elementFromPoint](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint)), placed on positions (**rectPos**.left, **rectPos**.top), (**rectPos**.left, **rectPos**.bottom - 1), (**rectPos**.right - 1, **rectPos**.top), (**rectPos**.right - 1, **rectPos**.bottom - 1), and compare it with the **el**.

4. If at least one these elements is same as **el**, or contains **el**, or **el** contains it, then the **el** is visible.

How to use it.

1. Include real-visibility.js on your html page (or load dynamically via some javascript loader). Functions isReallyNear and isReallyVisible will be added to DOM prototype (will be global for every DOM element).

2. Call on some DOM element (not on jquery selector!) function isReallyVisible (e.g. var visible = document.body.isReallyVisible();).
