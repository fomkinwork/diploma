export const getPosts = async (handler?: any, pageCount=1) => {
  const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${pageCount}`, {
      method: "GET",
      headers: {
          'X-API-KEY': '22ff0d72-11e8-449c-bcc6-b5fa1827833f',
          "Content-Type": "application/json"
      }
  })
      .then(response => response.json())
      .catch(e => console.log(e))
    handler(response.items);
    console.log(response.items)
}

// export const getPostsAdd = async (handler?: any, pageCount=2) => {
//     const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${pageCount}`, {
//         method: "GET",
//         headers: {
//             'X-API-KEY': '22ff0d72-11e8-449c-bcc6-b5fa1827833f',
//             "Content-Type": "application/json"
//         }
//     })
//         .then(response => response.json())
//         .catch(e => console.log(e))
//       handler(response.items);
//       console.log(response.items)
//   }

export const getTrendsPosts = async (handler: any) => {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top/', {
        method: "GET",
        headers: {
            'X-API-KEY': '22ff0d72-11e8-449c-bcc6-b5fa1827833f',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films);
    console.log(response.films)
}

export const getSearchPosts = async (handler:any,keyword:string, pagesCount=1) => {
    const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${pagesCount}`, {
        method: "GET",
        headers: {
            'X-API-KEY': '22ff0d72-11e8-449c-bcc6-b5fa1827833f',
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(e => console.log(e))
    handler(response.films)
}