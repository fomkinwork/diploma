
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import { IPostCard } from '../../components/common/PostList/PostCard/PostCard';
import PostList from '../../components/common/PostList/PostList';

import { IRootState } from '../../store';


const FavoritesPage: FC = () => {
    const [posts, setPosts] = useState<IPostCard[]>([]);

    const { cards } = useSelector((state: IRootState) => state.selectedCard);

    useEffect(() => {
        setPosts(cards.filter((card: IPostCard) => card.favorite));
    }, [cards])

    return (
        <PageWrapper>
            <PostList postCards={posts}/>
        </PageWrapper>
    );
};

export default FavoritesPage;