export const getDetailPost = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/`, {
        method: "GET",
        headers: {
            'X-API-KEY': 'de275520-e304-476e-9a0d-a973f6702948',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
}

export const infoFiims = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office/`, {
        method: "GET",
        headers: {
            'X-API-KEY': 'de275520-e304-476e-9a0d-a973f6702948',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
}
