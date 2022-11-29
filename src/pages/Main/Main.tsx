
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';
import Tabs from '../../components/common/Aside/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Aside/Tabs/TabsConfig';
import PostsService from '../../services/postsService';
import { IRootState } from '../../store';
import { getPosts } from '../../store/AsynsStore/posts';
import { getPostsAction } from '../../store/reducers/postReducer';
import { setCardsAction } from '../../store/reducers/selectedCardReducer';
import {useAuth} from "../../hooks/use-Auth";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";


const Main: FC = () => {
    const [posts, setPosts] = useState<IPostCard[]>([]);
    const dispatch = useDispatch();

    const [activeTabItem, setActiveTabItem] = useState<number>(TABS_CONFIG[0].id);
    const handleSetActiveTabItem = (id: number) => setActiveTabItem(id);

    const { cards } = useSelector((state: IRootState) => state.selectedCard);

    const setReduxPosts = (payload: IPostCard[]) => {
        dispatch(getPostsAction(payload));
        dispatch(setCardsAction(payload));
    }

    useEffect(() => {
        getPosts((posts: IPostCard[] ) => setReduxPosts(posts))
    }, [])

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    return (
        <PageWrapper>
            <PostList postCards={posts}/>
        </PageWrapper>
    );
};

export default Main;