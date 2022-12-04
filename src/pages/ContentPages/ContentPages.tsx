import React, {FC, useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";

import Tabs from '../../components/common/Aside/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Aside/Tabs/TabsConfig';
import { IPostContent} from '../../interface';
import { detailPost,} from '../../store/AsynsStore/detailPost';
import { slider } from '../../store/AsynsStore/slider';
import { IInfoFilms,} from '../../interface';
import { infoFiims } from '../../store/AsynsStore/detailPost';
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import { getPosts } from '../../store/post';

const Content: FC = () => {

    const {id = 1} = useParams();

    const [post, setPost] = useState<IPostContent | null>(null);
    const [info, setInfo] = useState<IInfoFilms>();
    const [posts, setPosts] = useState<IPostCard[]>([]);

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    useEffect( () => {
        const selectedPost = cards.find((posts: IPostContent) => posts.kinopoiskId === +id)
        setPost(!!selectedPost ? selectedPost : null)
        detailPost(+id, setPost)
    }, [])

    useEffect(() => {
        infoFiims(+id, setInfo)
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