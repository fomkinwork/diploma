import {useSelector} from 'react-redux';

export function useAuth() {
    // @ts-ignore
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}