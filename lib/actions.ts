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

export async function getPayments() {
  const supabase = await createClientForServer();

  // 認証済みユーザーを取得
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error('Error fetching user:', userError);
    throw userError;
  }

  if (!user) {
    console.warn('No authenticated user found.');
    return [];
  }

  console.log('Authenticated user:', user);

  // ユーザーに関連するデータを取得
  const { data, error } = await supabase
    .from('payments')
    .select('*')
    .eq('user_id', user.id); // user_idが認証済みユーザーのIDと一致するデータを取得
  console.log('🚀 ~ getPayments ~ user.id:', user.id);

  if (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }

  console.log('🚀 ~ getPayments ~ data:', data);
  return data;
}

export { signOut, signinWithGoogle, signinWithGithub };
