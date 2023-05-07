function plus () {
    var n1, n2, resultat;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    resultat = num1+num2;
    document.getElementById("res").innerHTML = resultat;
}

function minus () {
    var n1, n2, resultat;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    resultat = num1-num2;
    document.getElementById("res").innerHTML = resultat;
}

function inmultit () {
    var n1, n2, resultat;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    resultat = num1*num2;
    document.getElementById("res").innerHTML = resultat;
}

function inpartit () {
    var n1, n2, resultat;
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);

    resultat = num1/num2;
    document.getElementById("res").innerHTML = resultat;
}