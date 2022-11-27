import React, {FC, useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import ContentPost from "../../components/common/ContentPost/ContentPost";

import Tabs from '../../components/common/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Tabs/TabsConfig';
import { IPostContent, IStaff } from '../../interface';
import { detailPost, staff } from '../../store/AsynsStore/detailPost';
import { slider } from '../../store/AsynsStore/slider';

const Content: FC = () => {

    const {id = 1} = useParams();

    const [post, setPost] = useState<IPostContent | null>(null);
    const [staf, setStaf] = useState<IStaff>(); 

    // @ts-ignore
    const {cards} = useSelector(state => state.selectedCard)

    useEffect( () => {
        const selectedPost = cards.find((posts: IPostContent) => posts.kinopoiskId === +id)
        setPost(!!selectedPost ? selectedPost : null)
        detailPost(+id, setPost)
        staff(+id, setStaf)
    }, [cards])

    if (post) {
        return (
            <PageWrapper>
                <Tabs config={TABS_CONFIG} onClick={() => {}}/>
                <ContentPost contentPost={post} {...post} postCards={post} staffed={staf}/>
            </PageWrapper>
        );
    } else {
        return <div>Post is not found :(</div>
    }

};

export default Content;