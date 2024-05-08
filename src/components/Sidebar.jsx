import { PiCubeThin } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className='flex flex-col p-3 justify-between h-screen'>
      <div className='flex flex-col gap-4'>
        <Link href='/'>
          <PiCubeThin className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200' />
          <Link
            href='/'
            className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
          >
            <AiOutlineHome className='w-7 h-7' />
            <span className='font-bold hidden xl:inline'>Home</span>
          </Link>
          <button className='bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline'>
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}
