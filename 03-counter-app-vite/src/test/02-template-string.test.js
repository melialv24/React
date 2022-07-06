
function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );

describe('PRUEBAS EN 02-template-string', () => {
    test('get saludo debe retornar hola melissa', () => { 
        const name = 'melissa'
        const message = getSaludo(name)

        expect( message ).toBe(`Hola ${name}`)
    })
})