'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Message } from '@/lib/messages';

type Props = {
  newMessage: (message: Message) => void;
};
const SendMessage = ({ newMessage }: Props) => {
  const [input, setInput] = useState('');

  const textAreaAdjust = () => {
    const element = document.getElementById('textarea') as HTMLTextAreaElement;
    element.style.height = '1px';
    element.style.height = 5 + element.scrollHeight + 'px';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const message: Message = {
      user: {
        name: 'user',
        role: 'user',
      },
      message: input,
    };

    newMessage(message);

    setInput('');
  };

  return (
    <div className="w-full py-4 px-12  ">
      <form id="inputForm" onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full justify-center items-center">
          <Textarea
            id="textarea"
            rows={1}
            onKeyUp={textAreaAdjust}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your questions"
            className="w-full resize-none bg-white"
          />

          <Button type="submit" variant={'ai'} disabled={false}>
            {/* {isLoading && <Spinner />} */}
            Send
            <ArrowRight className="ml-2" size={15} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
