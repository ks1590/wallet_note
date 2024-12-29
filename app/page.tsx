import { Button } from '@/components/ui/button';
import { ChartComponent } from '@/components/ui/pieChart';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex gap-8 row-start-2 justify-center items-center w-full bg-main p-16 border-2 border-border shadow-shadow rounded-xl'>
        <ChartComponent />
        <ChartComponent />
        <ChartComponent />
      </main>
      <Button>Default</Button>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
