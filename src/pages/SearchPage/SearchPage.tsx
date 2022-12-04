
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';
import Tabs from '../../components/common/Aside/Tabs/Tabs';
import { TABS_CONFIG } from '../../components/common/Aside/Tabs/TabsConfig';
import PostsService from '../../services/postsService';
import { IRootState } from '../../store';
import {getPosts, getSearchPosts} from '../../store/AsynsStore/posts';
import { getPostsAction } from '../../store/reducers/postReducer';
import { setCardsAction } from '../../store/reducers/selectedCardReducer';
import {useAuth} from "../../hooks/use-Auth";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useLocation} from "react-router-dom";


const SearchPage: FC = () => {
    const [posts, setPosts] = useState<IPostCard[]>([]);

    const { search } = useLocation();
    console.log(search);
    const query = search.split("?search=")[1]
    console.log(query);


    useEffect(() => {
        getSearchPosts((posts: IPostCard[] ) => setPosts(posts), query)
    }, [search])

    // useEffect(() => {
    //     setPosts(cards);
    // }, [cards])

    return (
        <PageWrapper>
            <PostList postCards={posts}/>
        </PageWrapper>
    );
};

export default SearchPage;