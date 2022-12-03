import React, {FC} from 'react';

import UserAvatar from "./UserAvatar/UserAvatar";
import DefaultAvatar from "./DefaultAvatar/DefaultAvatar";

interface AvatarProps {
    userName: string
    url?: string
    alt?: string
}

const Avatar: FC<AvatarProps> = (props) => {
    return !!props.userName ? <UserAvatar { ...props } /> : <DefaultAvatar />
};

export default Avatar;