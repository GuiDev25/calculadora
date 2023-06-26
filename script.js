function calculo(){

    const btnEl = document.getElementById("btn");

    const diaEl = document.getElementById("dia");
    const mesEl = document.getElementById("mes");
    const anoEl = document.getElementById("ano");

    const dataAtual = new Date();

    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();

    const calcDia = diaAtual - diaEl;
    const calcMes = mesAtual - mesEl;
    const calcAno = anoAtual - anoEl;

    document.getElementById("dias").innerHTML = calcDia;
    document.getElementById("meses").innerHTML = calcMes;
    document.getElementById("anos").innerHTML = calcAno;

}