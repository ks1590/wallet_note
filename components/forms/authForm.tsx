'use client';
import { signinWithGithub } from '@/lib/actions';
import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const AuthForm = () => {
  return (
    <>
      <Card variant='primary' className='w-[350px]'>
        <div className='text-3xl font-bold m-5'>Wallet Note</div>
        <CardContent>
          <form className='flex flex-col gap-2'>
            <Button variant='noShadow' formAction={signinWithGithub}>
              Githubでログイン
            </Button>
          </form>
          <div className='relative my-7'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-secondaryBlack'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-primary px-2'>or</span>
            </div>
          </div>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Input id='name' placeholder='メールアドレス' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Input id='name' placeholder='パスワード' />
              </div>
              <div className='flex flex-col space-y-1'></div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between mb-5'>
          <Button variant='neutral' className='grow'>
            ログイン
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AuthForm;
