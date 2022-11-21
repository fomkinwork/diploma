import {useSelector} from 'react-redux';

export function useAuth() {
    // @ts-ignore
    const isAuth: boolean = useSelector(state => state.isAuth);
    // return {
    //     isAuth: !email,
    //     email,
    //     token,
    //     id,
    // };
}