function enviarData () {
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let fecha = document.getElementById('date').value;
let datos = {
    nombre:nombre,
    apellido:apellido,
    fecha: fecha
}
let url = 'https://jsonplaceholder.typicode.com/users'
 fetch (url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers:{
        'Content-Type':'application/json',
    },
 })
 .then((res)=> res.json())
 .catch((error)=>console.error('error',error))
 .then((response)=>console.log('Datos enviados',response));

 document.getElementById('nombre').value = '';
 document.getElementById('apellido').value = '';
 document.getElementById('date').value = '';

}

let btn = document.getElementById('send')
btn.addEventListener('click', enviarData);
