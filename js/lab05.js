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

    if (separ2[1].charAt(0) == 0) {
        let segundoNumero = separ2[1].charAt(1);
        let nacimient = new Date(separ2[0] + "/" + segundoNumero + "/" + separ2[2]);
        edadDate = new Date(Date.now() - nacimient.getTime());
        ed = Math.abs(edadDate.getUTCFullYear() - 1970);
        document.lab.edad.value = ed;

    } else {
        let nacimient = new Date(fecha);
        edadDate = new Date(Date.now() - nacimient.getTime());
        ed = Math.abs(edadDate.getUTCFullYear() - 1970);
        document.lab.edad.value = ed;
    }
}