import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='w-full p-4 border-b-4 border-border bg-primary'>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold'>Wallet Note</h1>
        <Button variant='neutral' className='font-bold'>
          新規作成
        </Button>
      </div>
    </header>
  );
};

export default Header;
