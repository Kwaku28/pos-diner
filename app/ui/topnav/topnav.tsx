import Link from 'next/link';
import NavLinks from './nav-links';
import Profile from './profile/user';

export default function TopNav() {
  return (
    <div className="flex justify-around py-4">
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
