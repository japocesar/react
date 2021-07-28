const apiKey = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';

const req = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

req
    .then(response => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);