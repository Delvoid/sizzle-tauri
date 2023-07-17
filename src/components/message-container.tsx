'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import Message from '@/components/ui/message';
import { SUGGESTIONS, WELCOME_MESSAGE } from '@/lib/constants';
import SendMessage from './send-message';
import { Message as MessageType, messages } from '@/lib/messages';
import { useEffect, useState } from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { i, m } from 'drizzle-orm/column.d-aa4e525d';

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

        {chatMessages?.map((m, i) => {
          if (i === chatMessages.length - 1) {
            return (
              <div key={i}>
                <Message {...m} />
              </div>
            );
          } else {
            return <Message key={i} {...m} />;
          }
        })}
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
