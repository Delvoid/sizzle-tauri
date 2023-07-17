import Greet from '@/components/greet';
import NotificationButton from '@/components/notification';
import MessageContainer from '@/components/message-container';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  space-y-2  text-black max-w-7xl w-full mx-auto ">
      {/* <Greet />
      <NotificationButton /> */}
      <MessageContainer />
    </main>
  );
}
