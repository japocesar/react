export const procesoPesado = ( iterations ) => {
    for ( let i=0; i<iterations; i++  ) {
        console.log('Iterating');
    }

    return `${ iterations } done!`;
}