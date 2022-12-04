export const getPosts = async (handler: any) => {
  const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/', {
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

export const getTrendsPosts = async (handler: any) => {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top/', {
        method: "GET",
        headers: {
            'X-API-KEY': 'de275520-e304-476e-9a0d-a973f6702948',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films)
    console.log(response.films);
}

export const getSearchPosts = async (handler:any,keyword:string, pagesCount=1) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${pagesCount}`, {
        method: "GET",
        headers: {
            'X-API-KEY': 'de275520-e304-476e-9a0d-a973f6702948',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films)
}