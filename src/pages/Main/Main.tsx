
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';
import Tabs from '../../components/common/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Tabs/TabsConfig';
import PostsService from '../../services/postsService';
import { IRootState } from '../../store';
import { getPosts } from '../../store/post';
import { getPostsAction } from '../../store/reducers/postReducer';
import { setCardsAction } from '../../store/reducers/selectedCardReducer';

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
            <Tabs config={TABS_CONFIG} onClick={handleSetActiveTabItem} />
            <PostList postCards={posts}/>
        </PageWrapper>
    );
};

export default Main;