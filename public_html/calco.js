/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var resultat="";
var hasCalculate = false;

window.onload = function(){
var x = document.getElementsByClassName("number");

for(i=0; i<x.length; i++){
    x[i].onclick = function(){
        number(this.id);
    };
}

var label = document.getElementById("label");
    
    label.focus();
    
    label.onkeydown = function(e){

        if(e.keyCode >=96 && e.keyCode <= 111 && e.keyCode !== 108 || e.keyCode === 8){
            ;
        }
        else if(e.keyCode === 187 || e.keyCode === 13){
            e.preventDefault();
            label.value = eval(label.value);
            hasCalculate = true;
        }
        else{
            e.preventDefault();
        }
        if(hasCalculate && e.keyCode === 8){
            e.preventDefault();
            label.value = "";
        }
    };
};


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




