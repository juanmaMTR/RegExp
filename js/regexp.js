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
    document.getElementById('matriculamoderna').onblur=comprobar
    document.getElementById('matriculaantigua').onblur=comprobar
    document.getElementById('dni').onblur=comprobar
    document.getElementById('fecha').onblur=comprobar
}

function comprobar(){
    console.log('Comprobar...');
    //Nº 15 de los ejercicios
    let exp1=new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(!document.getElementById('iIP').value.match(exp1)){
        console.log('IP Errónea');
    }
    //n1
    let expmatriculamoderna=new RegExp(/^(\d){4}[A-Z]{3}/)
    if(!document.getElementById('matriculamoderna').value.match(expmatriculamoderna)){
        console.log('Matricula moderna errónea');
    }
    //n2
    let expmatriculaantigua=new RegExp(/[A-Z]{2}\d{4}[A-Z]{1,2}/)
    if(!document.getElementById('matriculaantigua').value.match(expmatriculaantigua)){
        console.log('Matricula antigua errónea');
    }
    //n3
    let expdni=new RegExp()
    if(!document.getElementById('dni').value.match(expdni)){
        console.log('DNI erróneo');
    }
    //n4
    let expfecha=new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/\/](19|20)\d{2}$/)
    if(document.getElementById('fecha').value.match(expfecha)){
        console.log('Fecha errónea');
    }
}