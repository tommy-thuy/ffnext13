'use client';

import { useState } from 'react';

import { NavLink } from '@/components/User';
import { useUserService } from '@/services';

export { NavMongoDBLogin };

function NavMongoDBLogin() {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  async function logout() {
    setLoggingOut(true);
    await userService.logout();
  }
 
  return (
    <div className="flex space-x-4 items-center">
      <NavLink href="/user" className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500">
        Users
      </NavLink>
      <button
        onClick={logout}
        className="bg-indigo-600 px-6 py-2 rounded-md font-light font-bold hover:bg-indigo-500"        
        disabled={loggingOut}
      >
        {loggingOut ? <span className="spinner-border spinner-border-sm"></span> : <span>Logout</span>}
      </button>
    </div>
  );
}
