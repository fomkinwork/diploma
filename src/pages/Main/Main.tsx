
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';
import { IRootState } from '../../store';
import { getPosts } from '../../store/AsynsStore/posts';
import { getPostsAction } from '../../store/reducers/postReducer';
import { setCardsAction } from '../../store/reducers/selectedCardReducer';



const Main: FC = () => {
    const [posts, setPosts] = useState<IPostCard[]>([]);
    const [pageCount, setPageCount] = useState(2)

    const dispatch = useDispatch();

    const { cards } = useSelector((state: IRootState) => state.selectedCard);

    const setReduxPosts = (payload: IPostCard[]) => {
        dispatch(getPostsAction(payload));
        dispatch(setCardsAction(payload));
    }

    const handlePostAdd = () => {
        setPageCount(pageCount + 1)
        getPosts(setPosts, pageCount)
        setPosts([...posts, ...posts])        
    }

    useEffect(() => {
            getPosts((posts: IPostCard[] ) => setReduxPosts(posts))
    },[] )

    useEffect(() => {
        setPosts(cards);
    }, [cards])

    return (
        <PageWrapper>
            <PostList postCards={posts} onClick={handlePostAdd}/>
        </PageWrapper>
    );
};

export default Main;