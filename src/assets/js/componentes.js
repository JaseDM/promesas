

export const saludar = (nombre) => {
    let hola = 'hola2322';
    console.log(hola);

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append( h1 )
}