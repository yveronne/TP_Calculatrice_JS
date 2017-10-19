/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var resultat;
var oldNum="";
var newNum="";
var operateur ="";


function number(nbre){
    var label = document.getElementById("label");
    if(oldNum===""){
        label.innerHTML = label.textContent + nbre;
    }
    else {
        label.innerHTML = label.textContent + nbre;
        newNum = label.innerHTML;
    }
    
}

function plus(){
    var label = document.getElementById("label");
    /*operateur = '+';
    resultat = ParseFloat(label.innerHTML);*/
    oldNum = label.innerHTML;
    operateur = "+";
    label.innerHTML = "";
}

function egale(){
    var label = document.getElementById("label");
    newNum = label.innerHTML;
    oldNum = parseFloat(oldNum);
    newNum = parseFloat(newNum);
    if(operateur === "+"){
        resultat = oldNum + newNum;
        label.innerHTML = resultat;
    }
}

