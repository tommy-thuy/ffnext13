import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { options } from '@/app/api/auth/[...nextauth]/options';

const NavUser = async () => {
  const session = await getServerSession(options);
  return (
    <ul className="flex gap-x-4">
      {!session ? (
        <li>
          <Link href="/sign-in" className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500">
            Sign In
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link
              href="/profile"
              className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link href="/user" className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500">
              User list
            </Link>
          </li>
          <li>
            <Link
              href="/sign-out"
              className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500"
            >
              Sign Out
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export { NavUser };
