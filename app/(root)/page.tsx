import Link from 'next/link';

const Home = () => {
  console.log("WHAT COMPONENT AM I");
  return (
    <main className=''>
      <div className='text-5xl font-bold flex flex-col justify-center items-center gap-20 mt-15 text-center'>
        <p className=''>Welcome to Next.js</p>
        <ul className='underline flex flex-col gap-10'>
          <li><Link href={"dashboard/users"}>Users dashboard</Link></li>
          <li><Link href={"dashboard/analytics"}>Analytics dashboard</Link></li>
        </ul>
      </div>
    </main>
  )
}

export default Home
