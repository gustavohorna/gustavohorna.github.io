let extrae = document.getElementById("extrar");



extrae.addEventListener("click", extraer);

function extraer() {


    let apellidos_nombre = document.getElementById("apellidos_nombres").value;

    let separ = apellidos_nombre.split(" ", 4);

    document.lab.apellido_paterno.value = separ[0];

    document.lab.apellido_materno.value = separ[1];

    if (separ[3] == null) {
        document.lab.nombres.value = separ[2];
    } else {
        document.lab.nombres.value = separ[2] + " " + separ[3];
    }

    document.lab.long_apellido.value = separ[0].length;


    let fecha = document.getElementById("fecha").value;

    let separ2 = fecha.split("/", 3);

    meses_an = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


    if (separ2[1].charAt(0) == 0) {
        let segundoNumero = separ2[1].charAt(1);
        document.lab.mes.value = meses_an[segundoNumero - 1];
    } else {
        document.lab.mes.value = meses_an[separ2[1] - 1];
    }

    let nueva_fecha = separ2[2] + "/" + separ2[1] + "/" + separ2[0]
    let nacimient = new Date(nueva_fecha);
    edadDate = new Date(Date.now() - nacimient.getTime());
    ed = Math.abs(edadDate.getUTCFullYear() - 1970);
    document.lab.edad.value = ed;



}



let colo = document.getElementById("colorear");

colo.addEventListener("click", camb_colo);

let cont = 0;



function camb_colo() {

    if (cont == 0) {

        let a = document.getElementsByClassName("caja_a");
        for (var i = 0; i < a.length; i++) a[i].style.backgroundColor = "red";

        let b = document.getElementsByClassName("caja_s");
        for (var i = 0; i < b.length; i++) b[i].style.backgroundColor = "red";

        let c = document.getElementsByClassName("caja_r");
        for (var i = 0; i < c.length; i++) c[i].style.backgroundColor = "blue";

        let d = document.getElementsByClassName("caja_d1");
        for (var i = 0; i < d.length; i++) d[i].style.borderColor = "blue";

        let e = document.getElementsByClassName("caja_d");
        for (var i = 0; i < e.length; i++) e[i].style.borderColor = "blue";

        document.getElementById("colorear").style.backgroundColor = "blue";
        cont = 1;

    } else {

        let a = document.getElementsByClassName("caja_a");
        for (var i = 0; i < a.length; i++) a[i].style.backgroundColor = "blue";

        let b = document.getElementsByClassName("caja_s");
        for (var i = 0; i < b.length; i++) b[i].style.backgroundColor = "blue";

        let c = document.getElementsByClassName("caja_r");
        for (var i = 0; i < c.length; i++) c[i].style.backgroundColor = "red";

        let d = document.getElementsByClassName("caja_d1");
        for (var i = 0; i < d.length; i++) d[i].style.borderColor = "red";

        let e = document.getElementsByClassName("caja_d");
        for (var i = 0; i < e.length; i++) e[i].style.borderColor = "red";

        document.getElementById("colorear").style.backgroundColor = "red";
        cont = 0;
    }
}