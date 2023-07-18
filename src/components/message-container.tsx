'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import Message from '@/components/ui/message';
import { SUGGESTIONS, WELCOME_MESSAGE } from '@/config.ts/constants';
import SendMessage from './send-message';
import { Message as MessageType, messages } from '@/lib/messages';
import { useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';

const MessageContainer = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const [chatMessages, setChatMessages] = useState<MessageType[]>(messages);

  return (
    <>
      <ScrollArea
        className=" w-full flex-1"
        style={{
          overflowY: 'scroll',
        }}
      >
        <Message
          user={{ name: 'delvbot', role: 'assistant' }}
          message={WELCOME_MESSAGE}
          prompts={SUGGESTIONS}
        />

        {chatMessages?.map((m, i) => (
          <Message key={i} {...m} />
        ))}
      </ScrollArea>
      <div ref={targetRef} className="w-full">
        <SendMessage
          newMessage={(message) => {
            setChatMessages((prev) => [...prev, message]);
            scrollIntoView();
          }}
        />
      </div>
    </>
  );
};
export default MessageContainer;
