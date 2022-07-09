export const getGifs = async( category ) => {
    const key = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ category }&limit=10`);
    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs;
}