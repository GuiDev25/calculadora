function calculo(){
    const btnEl = document.getElementById("btn");

    const diaEl = document.getElementById("dia");
    const mesEl = document.getElementById("mes");
    const anoEl = document.getElementById("ano");
    
    const dataAtual = new Date();

    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();

    const calcDia = Math.abs(diaAtual - diaEl.value);
    const calcMes = Math.abs(mesAtual - mesEl.value);
    const calcAno = Math.abs(anoAtual - anoEl.value);

    if(anoEl.value>anoAtual || mesEl.value>12 || diaEl.value>31){
        alert("Data de nascimento inválida! Por favor digite novamente");
        location.reload();
    }else{
    document.getElementById("dias").innerHTML = calcDia;
    document.getElementById("meses").innerHTML = calcMes;
    document.getElementById("anos").innerHTML = calcAno;
    }
}