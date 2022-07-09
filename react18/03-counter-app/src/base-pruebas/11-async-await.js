export const getImagen = async( apiKey ) => {

    try {
        // const apiKey = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'Image not found'
    }
    
    
    
}

 getImagen();



