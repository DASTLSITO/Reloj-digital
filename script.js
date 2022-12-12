"use strict";

const horaDocumento = document.querySelector(".hora");
const segundosDocumento = document.querySelector(".segundos");
const amDocumento = document.querySelector(".am-pm");
const diaDocumento = document.querySelector(".dia");
let hora;
let segundos;
let minutos;
let am;
let dia;
let diaNumero;
let mes;
let año;
const semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

//Función que añade un cero en caso de que la hora sea de un solo dígito, ej: 8 -> 08
const añadirCero = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

//Función que hace que el formato sea de 12 horas
const automatizar = n => {
    if(n >= 13) {
        am = "PM";
        return n-12;
    }
    am = "AM";
    return n;
}

//Función que actualiza el reloj
const actualizarReloj = () =>{
    const time = new Date();
        hora = añadirCero(automatizar(time.getHours()));
        minutos = añadirCero(time.getMinutes());
        segundos = añadirCero(time.getSeconds());
        horaDocumento.textContent = `${hora}:${minutos}`;
        segundosDocumento.textContent = `${segundos}`;
        amDocumento.textContent = am;
        dia = time.getDay();
        diaNumero = time.getDate();
        mes = time.getMonth();
        año = time.getFullYear();
        diaDocumento.textContent = `${semana[dia]} ${diaNumero} de ${meses[mes]} del ${año}`;
}

setInterval(actualizarReloj, 0);