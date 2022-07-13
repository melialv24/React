import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('novios')

        expect( gifs.length ).toBeGreaterThan(0)
    
    })

})