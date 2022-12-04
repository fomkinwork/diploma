import {useSelector} from 'react-redux';
import {IUser, setUserAction} from "../store/reducers/userReducer";
import {getAuth} from "firebase/auth";

export function useAuth() {
    // @ts-ignore
    const { user } = useSelector(state => state.user)

    if(user) {
        return {
        isAuth: !!user.email,
        username: user.username,
        email: user.email,
        photo: user.photo,
        id: user.id,
    };}

}