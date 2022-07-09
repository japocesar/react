import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Tests in 06-deses-obj', () => { 
    test('usContext should return an object', () => {
        
        const per =  {
            clave: 'Cap.',
            nombre: 'Rogers',
            edad: 34,
            rango: 'Captain'
        }

        const dataTest = usContext(per);

        expect( dataTest ).toEqual({
            nombreClave: per.clave,
            anios: per.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    })
 })