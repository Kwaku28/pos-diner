import Link from 'next/link';
import NavLinks from './nav-links';
import Profile from './profile/user';

export default function TopNav() {
  return (
    <div className="flex justify-between py-2 px-1 border-b-[2px] border-slate-200 md:justify-around md:px-0 md:py-3">
      <div className='flex items-center'>
        <Link href="/dashboard" className='text-m hover:text-blue-600'>Home</Link>
      </div>
      <div className="flex">
        <NavLinks />
      </div>
      <div className="flex">
        <Profile />
      </div>
    </div>
  );
}
