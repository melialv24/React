import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp"

describe('Probando el 08-imp-exp', () => { 
    test('Get heroe by id debe de retornar un heroe por Id ', () => { 
        const id = 1
        const heroe = getHeroeById(id)
        console.log(heroe)

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('Get heroe by id debe de retornar un undefined si no existe el Id ', () => { 
        const id = 100
        const heroe = getHeroeById(id)
        console.log(heroe)

        expect( heroe ).toBeFalsy()
    })

    test('Get heroe by owner ', () => { 
        const owner = 'DC'
        const heroesFiltrados = getHeroesByOwner(owner)

        owner === 'DC' ? expect(heroesFiltrados.length).toEqual(3) : expect(heroesFiltrados.length).toEqual(2)
    })

})