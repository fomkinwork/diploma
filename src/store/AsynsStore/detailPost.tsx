export const getDetailPost = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/`, {
        method: "GET",
        headers: {
            'X-API-KEY': 'abd02b1b-dde9-46ba-8064-05bb7110fda3',
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
            'X-API-KEY': 'abd02b1b-dde9-46ba-8064-05bb7110fda3',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
        console.log(response); 
}
