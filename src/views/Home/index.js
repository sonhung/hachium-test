import ListTask from '@/components/Task/ListTask';

export default function Home() {
  return (
    <div className='w-full mt-10'>
      <div className='mx-auto px-6 max-w-[1400px]'>
        <ListTask />
      </div>
    </div>
  );
}
