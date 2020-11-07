$(document).ready(function(){

    //Os participantes do chá-rifa
    var participantes = [
        "Clícia",
        "Dra. Patrícia",
        "Andreza",
        "Edi",
        "Dra. Carmen",
        "Laíse",
        "Josy henriques",
        "Luana",
        "Fernanda",
        "Daiany",
        "Tayná",
        "Nazaré",
        "Salomão",
        "Rayane",
        "Mayane",
        "Tayná",
        "Jully",
        "Zico",
        "Dra. Carmen",
        "Meize",
        "Cleverton",
        "Dra. Carmen",
        "Dayane",
        "Claudia",
        "Fabiola",
        "Anissa Gabriela",
        "Wilma"
    ];

    //Loop pra colocar cada participante como novo item na lista
    for (var i=0; i<participantes.length; i++){
        $("#participantes").append("<li>"+participantes[i]+"</li>");
    };
    
    //Event Listener no botão sortear, gera um número aleatório 
    //e escolhe um participante pelo índice, mostra tudo em um overlay
    $("#sortear").click(function(){
        var num = Math.random()

        // console.log(num); -> checando o resultado de num

        // console.log(participantes.length); -> checando o tamanho de participantes

        var newNum = Math.floor(num * (participantes.length));

        // console.log(newNum); -> checando o resultado em newNum

        $("#result").removeClass("hidden");
        $("#result").append("<h1>"+participantes[newNum]+"</h1>");

    });


    //Event Listener do overlay pra recarregar a página depois do resultado
    $("#result").click(function(){
        location.reload();        
    })

});
