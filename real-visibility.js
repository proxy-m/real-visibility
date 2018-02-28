/**
* LICENSE: The MIT License
*/

Element.prototype.isReallyNear = function(otherEl) {
    let el = this;
    if (!el || !otherEl) {
        return null;
    }
    return el.contains(otherEl) || otherEl.contains(el);
};

Element.prototype.isReallyVisible = function() {
    let el = this;
    var debug = false;
    if (!document.body.contains(el)) {
        return null;
    }
    if (document.hidden===true) {
        return false;
    } else if (document.hidden!==false) {
        console.warn("NOT FATAL WARNING: Page Visibility API is not supported by your browser.");
    }

    var rectPos = el.getBoundingClientRect();
    if (debug) {
        console.debug("Bounding of: ", el, rectPos);
    }

    var result = 0;
    if (el.isReallyNear(document.elementFromPoint(rectPos.left, rectPos.top))) {
        result++;
    }
    if (el.isReallyNear(document.elementFromPoint(rectPos.left, rectPos.bottom - 1))) {
        result++;
    }
    if (el.isReallyNear(document.elementFromPoint(rectPos.right - 1, rectPos.top))) {
        result++;
    }
    if (el.isReallyNear(document.elementFromPoint(rectPos.right - 1, rectPos.bottom - 1))) {
        result++;
    }

    var info;
    var r = true;
    if (result == 4) {
        info = 'visible';
    } else if (result === 0) {
        info = 'hidden';
        r = false;
    } else {
        info = 'partially visible';
    }
    if (debug) {
        console.debug(info, el);
    }
    return r;
};
