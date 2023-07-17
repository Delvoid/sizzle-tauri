import { cn } from '@/lib/utils';
import { UserAvatar } from '../user-avatar';

type MessageProps = {
  user: {
    name: string;
    role: 'user' | 'assistant';
    imgURL?: string;
  };
  message: string;
  prompts?: string[];
};

const Message = ({ user, message, prompts }: MessageProps) => {
  const imgUrl = user.role === 'user' ? user.imgURL : '/gutenberg.png';
  const isAssistant = user.role === 'assistant';

  return (
    <div
      className={cn(' px-8 py-4 flex gap-2 ', isAssistant ? 'bg-[#F9A847]' : 'bg-[#F8D8AD]')}
      style={{ backgroundImage: "url('bg-cover.png')", backgroundSize: '75% 50%' }}
    >
      <div className=" min-w-[40px]">
        <UserAvatar name={user.name} imgURL={imgUrl} className="aspect-square rounded-none" />
      </div>
      <div className="flex flex-col gap-6  ">
        <div className=" ">{message}</div>
        {prompts && (
          <div className="flex flex-wrap gap-3 w-full items-center justify-center ">
            {prompts.map((s, i) => (
              <div
                key={i}
                className="bg-[#F8D8AD] font-montserrat font-bold hover:bg-[#f7d2a2] cursor-pointer rounded-full py-2 px-5 text-xs "
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
