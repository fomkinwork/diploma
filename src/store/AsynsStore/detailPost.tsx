export const getDetailPost = async (id: number, handler: any) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/`, {
        method: "GET",
        headers: {
            'X-API-KEY': '22ff0d72-11e8-449c-bcc6-b5fa1827833f',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
        handler(response)
        console.log(response); 
}
