import HTTPService from "./HTTPService";
import {responseToJSONHandler} from "../utils/responseUtil";
import {IPostCard} from "../components/common/PostList/PostCard/PostCard";

export interface PostsResults {
    count: number
    next: string | null
    previous: string | null
    results: IPostCard[]
}

export interface CreatePostData {
    title: string
    text: string
    image: File | string
    lesson_num: number
}

export default class PostsService {
    static async getPosts(limit: number = 6, offset: number = 0): Promise<PostsResults> {
        return await HTTPService.get(`https://studapi.teachmeskills.by/blog/posts?limit=${limit}&offset=${offset}`)
            .then(responseToJSONHandler)
            .catch(console.error)
    }

    static async addPost(data: CreatePostData, token: string): Promise<IPostCard> {
        return await HTTPService.post("https://studapi.teachmeskills.by/blog/posts/" , data, {
            "Authorization": `Bearer ${token}`
        })
            .then(responseToJSONHandler)
            .catch(console.error)
    }
}