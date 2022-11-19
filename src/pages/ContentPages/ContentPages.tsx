import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";

import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";
import {PageProps} from "../../types/page";
import Tabs from '../../components/common/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Tabs/TabsConfig';

const Content: FC<PageProps> = () => {

    const {id = 1} = useParams();

    const [post, setPost] = useState<IPostCard | null>(null);

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    useEffect( () => {
        const selectedPost = cards.find((posts: IPostCard) => posts.id === +id)
        setPost(!!selectedPost ? selectedPost : null)
        console.log(selectedPost)
    })

    if (post) {
        return (
            <PageWrapper>
                <Tabs config={TABS_CONFIG} onClick={() => {}}/>
                <ContentPost contentPost={post} />
            </PageWrapper>
        );
    } else {
        return <div>Post is not found :(</div>
    }

};

export default Content;