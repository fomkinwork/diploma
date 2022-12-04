export const detailPost = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/`, {
        method: "GET",
        headers: {
            'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
        console.log(response); 
}

export const infoFiims = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office/`, {
        method: "GET",
        headers: {
            'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
        console.log(response); 
}
