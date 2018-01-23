//DOM manipulation functions

var $ = function (selector) {
    var elem = document.querySelectorAll(selector);
    
    var text = function (str) {
        elem.innerText = str;
            for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
    }

    var addClass = function (className) {
        //use vanilla JS to add a class to every element in the string
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }

    var removeClass = function (className) {
        for (i = 0; i < elem.length; i++)
            elem[i].classList.remove(className);
        }

    var on = function(action, cb) {
        for (var i = 0; i < elem.length; i++){
            elem[i].addEventListener(action, cb);
        }
    }

    //toggleClass either adds or removes a class, depending on what currently exists
    var toggleClass = function (className) {
        for (i = 0; i < elem.length; i++) {
            if (elem[i].className.includes(className)){
                elem[i].classList.remove(className);
            }
            else {
                elem[i].classList.add(className)
            }
        }
    }
        
    //html function changes the property of each item in the elem list
    var html = function (newHTML) {
        for (var i = 0; i < elem.length; i++){
            elem[i].innerHTML = newHTML;
        }
    }
   
//need to return each component that you want to get out of the function since it is not globally defined
    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html,
        toggleClass: toggleClass
    }

    return publicAPI;  
}  


