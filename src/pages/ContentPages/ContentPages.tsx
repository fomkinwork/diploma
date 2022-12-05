import React, {FC, useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";

import { IPostContent} from '../../interface';
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import { getPosts, getTrendsPosts } from '../../store/AsynsStore/posts';
import { getDetailPost } from '../../store/AsynsStore/detailPost';

import {setArticleAction} from "../../store/reducers/articleReducer";
import {updateCardAction} from "../../store/reducers/selectedCardReducer";
import { getPostsAction } from '../../store/reducers/postReducer';
import { setCardsAction } from '../../store/reducers/selectedCardReducer';

const Content: FC = () => {

    const {id = 1} = useParams();
    const dispatch = useDispatch()

    const [contentPost, setContentPost] = useState<IPostContent | null>(null);
    const [posts, setPosts] = useState<IPostCard[]>([]);

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    const handleAddToFavoritePost = () => {
        // @ts-ignore
        dispatch(updateCardAction({...post, favorite: !post.favorite}));
    }

    useEffect(() => {
        getTrendsPosts(setPosts)
    }, [])

    const setReduxPosts = (payload: IPostCard[]) => {
        dispatch(getPostsAction(payload));
        dispatch(setCardsAction(payload));
    }

    useEffect( () => {
        getDetailPost(+id, setContentPost)
    }, [])

    useEffect(() => {
        getTrendsPosts((cards: IPostCard[] ) => setReduxPosts(cards))
    }, [])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    if (contentPost) {
        return ( 
            <PageWrapper>
                <ContentPost contentPost={contentPost} postCards={posts} onClick={handleAddToFavoritePost}/>
            </PageWrapper>
        );
    } else {
        return <div>Post is not found :(</div>
    }

};

export default Content;