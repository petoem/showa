/*!
 * Showa -> show/hide one way or another
 * https://github.com/petoem/showa
 *
 * Released under the MIT license
 * https://github.com/petoem/showa/blob/master/LICENSE
 *
 */
function Showa(){
    var _elements = new Array();
    var _currentSlctr = "";

    function setState(element, vsbl){
        if(($(element.selector).is(":visible") != vsbl) || ($(element.selector).is(":hidden") != !vsbl)){
            $(element.selector).toggle(vsbl);
            element.visible = vsbl;
        }
    }

    //slctr{string}, vsbl{bool[default:false]}
    this.addElement = function(slctr, vsbl){
        vsbl = vsbl || false;
        var virginElement = {selector: slctr, visible: vsbl};
        setState(virginElement, vsbl);
        _elements.push(virginElement);
    };
    this.rmElement = function (slctr){
        _elements = _elements.filter(function (element){
            return (slctr != element.selector);
        });
    };
    
    function showOnly(element) {
        if(_currentSlctr == element.selector){
            setState(element, true);
        }else{
            setState(element, false);
        }
    }
    function showOne (element) {
        if(_currentSlctr == element.selector){
            setState(element, true);
        }
    }
    function hideOnly (element) {
        if(_currentSlctr == element.selector){
            setState(element, false);
        }else{
            setState(element, true);
        }
    }
    function hideOne (element) {
        if(_currentSlctr == element.selector){
            setState(element, false);
        }
    }
    function reversAll (element) {
        console.log(element.visible+element.selector);
        if(element.visible){
            setState(element, false);
        }else{
            setState(element, true);
        }
    }

    this.printList = function (){
        console.debug(_elements);
    };

    this.do = function (fn, slctr){
        _currentSlctr = slctr || "";
        switch (fn) {
            case "showOnly": _elements.forEach(showOnly); break;
            case "showOne": _elements.forEach(showOne); break;
            case "hideOnly": _elements.forEach(hideOnly); break;
            case "hideOne": _elements.forEach(hideOne); break;
            case "reversAll": _elements.forEach(reversAll); break;
        }
    };
};
var showa = new Showa();