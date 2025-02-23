import { redirect } from 'next/navigation';
import DataTable from '@/components/ui/dataTable';
import Header from '@/components/header';
import { ChartComponent } from '@/components/charts/pie-chart';
import { BarChartComponent } from '@/components/charts/bar-chart';
import { AreaChartComponent } from '@/components/charts/area-chart';
import { createClientForServer } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClientForServer();
  const session = await supabase.auth.getUser();

  if (!session.data.user) {
    redirect('/auth');
  }

  const {
    data: {
      user: { user_metadata, app_metadata },
    },
  } = session;

  const { name, email, user_name, avatar_url } = user_metadata;

  const userName = user_name ? `@${user_name}` : 'User Name Not Set';

  console.log(session);
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 gap-8 font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto my-8 justify-center'>
        <section className='grid grid-cols-3 gap-8 justify-center items-center w-full bg-main p-8 border-2 border-border shadow-shadow rounded-xl'>
          <ChartComponent />
          <ChartComponent />
          <ChartComponent />
        </section>
        <section className='grid grid-cols-2 gap-8 justify-center items-center w-full'>
          <div className='grow bg-secondaryPurple p-8 border-2 border-border shadow-shadow rounded-xl'>
            <BarChartComponent />
          </div>
          <div className='grow bg-secondaryGreen p-8 border-2 border-border shadow-shadow rounded-xl'>
            <DataTable />
          </div>
        </section>
        <section className='grid grid-cols-1 gap-8 justify-center items-center w-full'>
          <div className='grow bg-secondaryPurple p-8 border-2 border-border shadow-shadow rounded-xl'>
            <AreaChartComponent />
          </div>
        </section>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
      </div>
    </div>
  );
}
