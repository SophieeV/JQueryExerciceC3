$(document).ready(function(){
var solution = Math.floor(Math.random() * 100) + 1;
var timeNumber = 0;
console.log(solution);
    $("#b1").click(function(){
     timeNumber++;
     if($("#input1").val()==false){
        alert("veuillez entrer un nombre");
    }else if(isNaN($("#input1").val())){
        alert("veuillez entrer un nombre");
    }else if(($("#input1").val()==solution)){
        alert("numéro trouvé , nombre d'essais : " + timeNumber);
    }else if(($("#input1").val()<solution)){
        alert("le nombre à trouver est supérieur" );
    }else if(($("#input1").val()>solution)){
        alert("le nombre à trouver est inférieur");
    };
});
});
