
import React, {FC, useEffect, useState} from 'react';


import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';
import {getPosts, getSearchPosts} from '../../store/AsynsStore/posts';
import {useLocation} from "react-router-dom";


const SearchPage: FC = () => {
    const [posts, setPosts] = useState<IPostCard[]>([]);

    const { search } = useLocation();
    const query = search.split("?search=")[1]


    useEffect(() => {
        getSearchPosts((posts: IPostCard[] ) => setPosts(posts), query)
    }, [search])

    return (
        <PageWrapper>
            <PostList postCards={posts}/>
        </PageWrapper>
    );
};

export default SearchPage;