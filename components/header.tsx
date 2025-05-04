import React from 'react';
import { Button } from './ui/button';
import { signOut } from '@/lib/actions';

const Header = () => {
  return (
    <header className='w-full p-4 border-b-4 border-border bg-primary'>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold'>Wallet Note</h1>
        <div className='flex'>
          <Button variant='neutral' className='font-bold mx-4'>
            新規作成
          </Button>
          <form action={signOut}>
            <Button variant='neutral' className='font-bold'>
              ログアウト
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
