import { getHeroeById, getHeroesByOwner } from "../base-pruebas/08-imp-exp"
import heroes from '../data/heroes'

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
        const owner = 'moco'
        const heroesFiltrados = getHeroesByOwner(owner)
        expect( heroesFiltrados).toEqual( heroes.filter((heroe) => heroe.owner === owner))
        if(owner === 'DC') expect(heroesFiltrados.length).toEqual(3)
        if(owner === 'Marvel') expect(heroesFiltrados.length).toEqual(2)
    })

})