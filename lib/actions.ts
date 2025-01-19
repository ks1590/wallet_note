'use server';

import { createClientForServer } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

type Provider = 'google' | 'github';

const signInWith = (provider: Provider) => async () => {
  const supabase = await createClientForServer();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.log(error);
  }

  console.log('🚀 ~ signInWith ~ data.url:', data.url);
  if (data?.url) {
    redirect(data.url);
  }
};

const signinWithGoogle = signInWith('google');
const signinWithGithub = signInWith('github');

const signOut = async () => {
  const supabase = await createClientForServer();
  await supabase.auth.signOut();
};

export { signOut, signinWithGoogle, signinWithGithub };
