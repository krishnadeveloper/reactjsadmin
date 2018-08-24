import React from "react"


export const loadJsFiles = (filename)=>{
    // Create the dom element
    filename.forEach(file => {
        var elm = document.createElement('script');
        // Set the type attribute
        elm.type = 'text/javascript';
        // set src attibute
        elm.src = file;
        // Append new element in the body.
        document.body.appendChild(elm);    
    });
    
}
export const loadJsFile = (filename)=>{
    // DOM :: New element in body
    var elm = document.createElement('script');
    // Set attributes
    elm.setAttribute('type','text/javascript');
    elm.setAttribute('src',filename);
    document.body.appendChild(elm); 

}
export const loadCssFiles = (filename)=>{
    // DOM:: element for appendind css file
    var elm = document.createElement('style');
    // Set Attributes
    elm.setAttribute('type','text/css');
    elm.setAttribute('href',filename);
    document.body.appendChild(elm);

}
