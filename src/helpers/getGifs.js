

export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&lang=es&api_key=ZseElKPHJGsUo7W4pl7eWVmRRQUPJvhY`;
    const response = await fetch(url)
    const {data} = await response.json();

    const gifs = data.map(img =>{
        return {
            id: img?.id,
            title:img?.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;
}