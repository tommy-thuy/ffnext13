'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useUserService } from '@/services';

export default Register;

function Register() {
  const userService = useUserService();

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const fields = {
    firstName: register('firstName', { required: 'First Name is required' }),
    lastName: register('lastName', { required: 'Last Name is required' }),
    username: register('username', { required: 'Username is required' }),
    password: register('password', {
      required: 'Password is required',
      minLength: { value: 6, message: 'Password must be at least 6 characters' }
    })
  };

  async function onSubmit(user: any) {
    await userService.register(user);
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl">
        <Image className="mx-auto h-10 w-auto" width={250} height={100} src="/assets/images/the-movie-db-logo.svg" alt="" />
      </div>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create a new account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
              <input
                {...fields.firstName}
                placeholder="First Name"
                type="text"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.firstName ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.firstName?.message?.toString()}</div>
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <input
                {...fields.lastName}
                placeholder="Last Name"
                type="text"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.lastName ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.lastName?.message?.toString()}</div>
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
              <input
                {...fields.username}
                type="text"
                placeholder="Username"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.username ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                {...fields.password}
                type="password"
                placeholder="Password"
                className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
            </div>
            <div className="flex items-center justify-between">
            <button disabled={formState.isSubmitting} className="w-full bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500 active mr-5">
              {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
              Register
            </button>
            <Link href="/user/login" className="w-full text-center ml-5 bg-indigo-600 px-6 py-2 rounded-md font-bold hover:bg-indigo-500 active ">
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
