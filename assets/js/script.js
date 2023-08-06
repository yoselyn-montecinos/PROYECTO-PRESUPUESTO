let totalGastos = 0 ;
let id = 0;
let arrayGastos = [];
let arrayPresupuestos = [];
let totalPresupuestos = 0 ;
let resultadoResta = 0 ;
let idp = 0;

const getId = () => {
    id++;
    return id;
}

const getIdp = () => {
    idp++;
    return idp;
}



const getPresupuestoObj = (cantidadp) => {
    const NewPresupuesto = {
        idp: getIdp(),
        cantidadp: parseInt(cantidadp)
    }
    return JSON.parse(JSON.stringify(NewPresupuesto));
}


const getGastoObj = (nombre, cantidad) => {
    const NewGasto = {
        id: getId(),
        nombre: nombre,
        cantidad: parseInt(cantidad)
    }
    return JSON.parse(JSON.stringify(NewGasto));
}



const addPresupuestoTabla = (Presupuesto) => {
    const tbody = document.getElementById('tpresupuesto');
    tbody.innerHTML += `<tr id="elementoPresupuesto${Presupuesto.idp}">
        <td>${Presupuesto.idp}</td>
        <td>${Presupuesto.cantidadp}</td> 
        <td>
        <a href="#" onclick="borrarPresupuesto(${Presupuesto.idp})" ><i class="bi bi-trash3"></i></a>
        </td>
    </tr> `;
}
const addGastoTabla = (Gasto) => {
    const tbody = document.getElementById('tcontenido');
    tbody.innerHTML += `<tr id="elemento${Gasto.id}">
        <td>${Gasto.id}</td>
        <td>${Gasto.nombre}</td>
        <td>${Gasto.cantidad}</td> 
        <td>
        <a href="#" onclick="borrarGasto(${Gasto.id})" > <i class="bi bi-trash3"></i></a>
        </td>
    </tr> `;
}

const inputPresupuesto = () => {
    let presupuestocantidad= document.getElementById("presupuestoInput").value;
    
    let Presupuesto = getPresupuestoObj(presupuestocantidad);
    console.log('Presupuesto:', Presupuesto);
    console.log('wena wena vamos bien con el presupuesto :D :');

    totalPresupuestos += Presupuesto.cantidadp;
    console.log('totalPresupuestos:', totalPresupuestos);

    arrayPresupuestos.push(Presupuesto);
    console.log('arrayPresupuestos:', arrayPresupuestos);

    document.getElementById('despliegaTotalp').innerText = totalPresupuestos;

    addPresupuestoTabla(Presupuesto);
}

const inputGasto = () => {
    let gastoNombre = document.getElementById("nombreInput").value;
    let gastocantidad= document.getElementById("cantidadInput").value;

    let Gasto = getGastoObj(gastoNombre, gastocantidad);
    console.log('Gasto:', Gasto);

    totalGastos += Gasto.cantidad;
    console.log('totalGastos:', totalGastos);

    arrayGastos.push(Gasto);
    console.log('arrayGastos:', arrayGastos);

    document.getElementById('despliegaTotal').innerText = totalGastos;

    addGastoTabla(Gasto);
}

const calcularSaldo = () => {

resultadoResta = totalPresupuestos - totalGastos;
document.getElementById('queda').innerText = resultadoResta;

    // let saldoInput = document.getElementById("saldoInput");

    // if (totalGastos > totalPresupuesto) {
    //     saldoInput.value = "Gastos superan el presupuesto";
    // } else {
    //     resultadoResta = totalPresupuesto - totalGastos;
    //     saldoInput.value = resultadoResta;
    // }
}

const borrarPresupuesto = (idp) => {
    console.log('arrayPresupuestos:', arrayPresupuestos);
    console.log('idp:', idp);

    arrayPresupuestos = arrayPresupuestos.filter((presupuesto) => {
        if (presupuesto.idp == idp) {
            let filaABorrar = document.getElementById("elementoPresupuesto" + presupuesto.idp);
            filaABorrar.remove();
            return false;
        }
        return true;
    });

    totalPresupuesto = arrayPresupuestos.reduce((total, cantidadp) => total + cantidadp.cantidadp , 0);
    document.getElementById('despliegaTotalp').innerText = totalPresupuesto;
    console.log('3.- arrayPresupuestos:', arrayPresupuestos);
}


const borrarGasto = (id) => {
    console.log('arrayGastos:', arrayGastos);
    console.log('id:', id);

    arrayGastos = arrayGastos.filter((gasto) => {
        if (gasto.id == id) {
            let filaABorrar = document.getElementById("elemento" + gasto.id);
            filaABorrar.remove();
            return false;
        }
        return true;
    });

    totalGastos = arrayGastos.reduce((total, valor) => total + valor.cantidad , 0);
    document.getElementById('despliegaTotal').innerText = totalGastos;
    console.log('2.- arrayGastos:', arrayGastos);
}