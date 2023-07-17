import { AvatarProps } from '@radix-ui/react-avatar';

import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';

interface UserAvatarProps extends AvatarProps {
  imgURL?: string;
  name: string;
}

export function UserAvatar({ imgURL, name, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {imgURL ? (
        <div className="relative aspect-square h-full w-full">
          <img src={imgURL} alt="profile picture" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{name}</span>
          <Icons.user className="h-6 w-6 " />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
