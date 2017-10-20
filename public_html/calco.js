/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var resultat="";
var hasCalculate = false;


function number(nbre){
    var label = document.getElementById("label");
    if(!hasCalculate){
       label.value = label.value + nbre; 
    }
    
    
}

function calcule(op){
    var label = document.getElementById("label");
    label.value = label.value + op;
    hasCalculate = false;
}

function result(){
    var label = document.getElementById("label");
    hasCalculate = true;
    resultat = label.value;
    label.value = eval(resultat);
}
