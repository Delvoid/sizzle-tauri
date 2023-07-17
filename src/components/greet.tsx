'use client';

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

export default function Greet() {
  const [greeting, setGreeting] = useState('');
  const greet = async () => {
    invoke<string>('greet', { name: 'Next.js' }).then(console.log).catch(console.error);
    const test = await invoke<string>('greet', { name: 'Next.js' });
    setGreeting(test);
  };

  // reset greeting after 3 secs
  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [greeting]);

  // Necessary because we will have to use Greet as a component later.
  return (
    <>
      <button className="px-3 py-2 rounded-md bg-blue-300" onClick={greet}>
        Greet
      </button>
      {greeting && <p className="text-2xl">{greeting}</p>}
    </>
  );
}
