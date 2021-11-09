/**
    regexp.js
    Archivo para realizar validaciones de expresiones regulares en js
    @Author Juan Manuel Toscano Reyes
    @license GPL Afero v.3
*/

'use strict'

window.onload=iniciar

function iniciar(){
    document.getElementById('iIP').onblur=comprobar
}

function comprobar(){
    console.log('Comprobar...');
    //Nº 15 de los ejercicios
    let exp1=new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(!document.getElementById('iIP').value.match(exp1)){
        console.log('IP Errónea');
    }
}