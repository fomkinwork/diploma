export const getPosts = async (handler: any) => {
  const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/', {
      method: "GET",
      headers: {
          'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
          "Content-Type": "application/json"
      }
  })
      .then(response => response.json())
      .catch(e => console.log(e))
    handler(response.items)
    console.log(response.items); 
}