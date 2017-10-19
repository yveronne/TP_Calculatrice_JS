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
        label.value = label.value + nbre;
    }
    else {
        label.value = label.value + nbre;
        newNum = label.value;
    }
    
}

function calcule(op){
    var label = document.getElementById("label");
    oldNum = label.value;
    switch(op){
        case "plus":
            operateur = "+";
            break;
        case "moins":
            operateur = "-";
            break;
        case "multiplie":
            operateur = "*";
            break;
        case "divise":
            operateur = "/";
            break;
    }
    label.value = "";
    
}

function egale(){
    var label = document.getElementById("label");
    newNum = label.value;
    oldNum = parseFloat(oldNum);
    newNum = parseFloat(newNum);
    switch(operateur){
        case "+":
            resultat = oldNum + newNum;
            break;
        case "-":
            resultat = oldNum - newNum;
            break;
        case "/":
            resultat = oldNum / newNum;
            break;
        case "*":
            resultat = oldNum * newNum;
            break;
        default: 
            resultat = oldNum;
    }
    label.value = resultat;
}

