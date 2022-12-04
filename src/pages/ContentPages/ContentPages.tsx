import React, {FC, useEffect, useState} from 'react';

import { useSelector } from "react-redux";

import {useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";

import { IPostContent} from '../../interface';
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import { getTrendsPosts } from '../../store/AsynsStore/posts';
import { getDetailPost } from '../../store/AsynsStore/detailPost';

const Content: FC = () => {

    const {id = 1} = useParams();

    const [post, setPost] = useState<IPostContent | null>(null);
    const [posts, setPosts] = useState<IPostContent[]>([]);

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    useEffect(() => {
        getTrendsPosts(setPosts)
    }, [])

    useEffect( () => {
        const selectedPost = cards.find((posts: IPostContent) => posts.kinopoiskId === +id)
        setPost(!!selectedPost ? selectedPost : null)
        getDetailPost(+id, setPost)
    }, [])

    if (post) {
        return ( 
            <PageWrapper>
                <ContentPost contentPost={post} {...post} postCards={posts}/>
            </PageWrapper>
        );
    } else {
        return <div>Post is not found :(</div>
    }

};

export default Content;