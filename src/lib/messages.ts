export type Message = {
  user: {
    name: string;
    role: 'user' | 'assistant';
    imgURL?: string;
  };
  message: string;
  prompts?: string[];
};
export const messages: Message[] = [
  {
    user: {
      name: 'some-user',
      role: 'user',
    },
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non!',
  },
  {
    user: {
      name: 'delvbot',
      role: 'assistant',
    },
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non!',
  },
  {
    user: {
      name: 'some-user',
      role: 'user',
    },
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non!',
  },
  {
    user: {
      name: 'delvbot',
      role: 'assistant',
    },
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, non!',
  },
];
