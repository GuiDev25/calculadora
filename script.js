function calculo(){
    const btnEl = document.getElementById("btn");

    const diaEl = document.getElementById("dia");
    const mesEl = document.getElementById("mes");
    const anoEl = document.getElementById("ano");
    
    const dataAtual = new Date();

    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth()+1;
    const anoAtual = dataAtual.getFullYear();

    const calcDia = Math.abs(diaAtual - diaEl.value);
    const calcMes = Math.abs(mesAtual - mesEl.value);
    var calcAno = Math.abs(anoAtual - anoEl.value);


    if(mesEl.value>mesAtual){
        calcAno = calcAno - 1;
    }else{
        calcAno = calcAno;
    }
    if(anoEl.value>anoAtual || mesEl.value>=12 || diaEl.value>31 || anoEl.value<=1900){
        alert("Data de nascimento inválida! Por favor digite novamente");
        location.reload();
    }else{
    document.getElementById("vjv").innerHTML = "Você já viveu:";
    document.getElementById("dias").innerHTML = calcDia+" dias";
    document.getElementById("meses").innerHTML = calcMes+" meses e";
    document.getElementById("anos").innerHTML = calcAno+" anos";
    }
}