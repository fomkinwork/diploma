import {useSelector} from 'react-redux';

export function useAuth() {
    // @ts-ignore
    let { user, isAuth } = useSelector(state => state.user)
    console.log(isAuth)
    if(user) {
        return {
        isAuth: isAuth,
        username: user.username,
        email: user.email,
        photo: user.photo,
        id: user.id,
    };}
}