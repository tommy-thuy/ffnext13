'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Spinner } from '@/components/User';
import { useUserService } from '@/services';



export default Users;

function Users() {
  const userService = useUserService();
  const users = userService.users;
  const user = userService.currentUser;

  useEffect(() => {
    userService.getAll();
    
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 xl:px-0 mt-20 mb-20">
      <h1 className="text-xl mb-10 font-bold leading-tight tracking-tight  md:text-2xl ">User list</h1>
      <Link
        href="/user/add"
        className="w-full text-center bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500 active "
      > 
        Add User
      </Link>
      <table className="table-fixed w-full inline-block  border shadow-2xl rounded-lg p-5 mt-10">
        <thead>
          <tr>
            <th align="left" style={{ width: '30%' }}>First Name</th>
            <th align="left" style={{ width: '30%' }}>Last Name</th>
            <th align="left" style={{ width: '30%' }}>Username</th>
            <th align="left" style={{ width: '10%' }}>Operator</th>
          </tr>
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );

  function TableBody() {
    if (users?.length) {
      return users.map((user) => (
        <tr key={user.id}>
          <td style={{ width: '30%' }}>{user.firstName}</td>
          <td style={{ width: '30%' }}>{user.lastName}</td>
          <td style={{ width: '30%' }}>{user.username}</td>
          <td style={{ whiteSpace: 'nowrap',  width: '10%' }}>
            <Link href={`/user/edit/${user.id}`} className="btn btn-sm btn-primary me-1">
              Edit
            </Link>
            <button
              onClick={() => userService.delete(user.id)}
              className="btn btn-sm btn-danger btn-delete-user"
              style={{ width: '60px' }}
              disabled={user.isDeleting}
            >
              {user.isDeleting ? <span className="spinner-border spinner-border-sm"></span> : <span>Delete</span>}
            </button>
          </td>
        </tr>
      ));
    }

    if (!users) {
      return (
        <tr>
          <td colSpan={4}>
            <Spinner />
          </td>
        </tr>
      );
    }

    if (users?.length === 0) {
      return (
        <tr>
          <td colSpan={4} className="text-center">
            <div className="p-2">No Users To Display</div>
          </td>
        </tr>
      );
    }
  }
}
