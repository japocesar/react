// const getImagenPromesa = () => new Promise(resolve => resolve('http://miurl.com'));
// getImagenPromesa().then(console.log);

const getImage = async() => {
    try {
        const apiKey = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        console.log(data)
    } catch (error) {
        console.warn(error);
    }

};

getImage();


/* const apiKey = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';
const req = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
req
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn); */