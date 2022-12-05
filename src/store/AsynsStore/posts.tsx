export const getPosts = async (handler?: any, pageCount=1) => {
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${pageCount}`, {
      method: "GET",
      headers: {
          'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
          "Content-Type": "application/json"
      }
  })
      .then(response => response.json())
      .catch(e => console.log(e))
    handler(response.items);
}

export const getTrendsPosts = async (handler: any, pagesCount=1) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pagesCount}`, {
        method: "GET",
        headers: {
            'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films);
}

export const getSearchPosts = async (handler:any,keyword:string, pagesCount=1) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${pagesCount}`, {
        method: "GET",
        headers: {
            'X-API-KEY': '04a2ea85-90da-42e4-9240-0471c2be5d51',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films)
}