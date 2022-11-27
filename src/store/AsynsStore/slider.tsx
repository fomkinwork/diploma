export const slider = async (handler: any, id: number) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
        method: "GET",
        headers: {
            'X-API-KEY': 'de275520-e304-476e-9a0d-a973f6702948',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
      handler(response.items)
      console.log(response.items); 
  }