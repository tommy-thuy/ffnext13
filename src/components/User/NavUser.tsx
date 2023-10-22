'use client';
import { useState, useEffect } from 'react';

import { NavLink } from './NavLink';
import { useUserService } from '@/services';

export { NavUser };

function NavUser() {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  async function logout() {
    setLoggingOut(true);
    await userService.logout();
  }


  return (
    <>
      {loggingOut ? (
        <NavLink href="/user/login" exact className="bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500">
          LOGIN
        </NavLink>
      ) : (
        ''
      )}
      {loggingOut ? (
        ''
      ) : (
        <NavLink
          href="/user"
          exact
          className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500"
        >
          Users
        </NavLink>
      )}
      {loggingOut ? (
        ''
      ) : (
        <button
          onClick={logout}
          className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500"
          disabled={loggingOut}
        >
          Logout
        </button>
      )}
    </>
  );
}
