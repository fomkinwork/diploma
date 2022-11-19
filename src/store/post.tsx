export const getPosts = async (handler: any) => {
  const {results: posts} = await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=10", {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  })
      .then(response => response.json())
      .catch(e => console.log(e))
  handler(posts)
}