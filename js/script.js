var count =(function () {
    
    var counter = 0;
    return function () {return counter +1;}
})();

function displaycount(){

    document.getElementById("carrier").innerHTML = count(); 
}

var count =(function () {
    
    var counter = 0;
    return function () {return counter +1;}
})();

function displaycount2(){

    document.getElementById("carrier2").innerHTML = count(); 
}


