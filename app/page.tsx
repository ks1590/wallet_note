import { Button } from '@/components/ui/button';
import { ChartComponent } from '@/components/ui/pieChart';
import { BarChartComponent } from '@/components/ui/barChart';
import DataTable from '@/components/ui/dataTable';
import Header from '@/components/header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 gap-8 font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto my-8 justify-center'>
        <main className='grid grid-cols-3 gap-8 justify-center items-center w-full bg-main p-8 border-2 border-border shadow-shadow rounded-xl'>
          <ChartComponent />
          <ChartComponent />
          <ChartComponent />
        </main>
        <main className='grid grid-cols-2 gap-8 justify-center items-center w-full '>
          <div className='grow bg-secondaryPurple p-8 border-2 border-border shadow-shadow rounded-xl'>
            <BarChartComponent />
          </div>
          <div className='grow bg-secondaryGreen p-8 border-2 border-border shadow-shadow rounded-xl'>
            <DataTable />
          </div>
        </main>
        <Button>Default</Button>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
      </div>
    </div>
  );
}
