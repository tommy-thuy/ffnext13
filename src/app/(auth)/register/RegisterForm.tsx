'use client';

import styles from './Form.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Loader from '../loading';
import { useSession } from 'next-auth/react';

type Inputs = {
  email: string;
  fullName: string;
  password: string;
};

const RegisterForm = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'authenticated') {
    router?.push('/my/dashboard');
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      fullName: '',
      password: ''
    }
  });

  const [message, setMessage] = useState<null | string>(null);

  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { fullName, email, password } = form;
    console.log(fullName);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          email,
          password
        })
      });
      res.status === 201 && router.push('/login?success=Account has been created');
    } catch (err: any) {
      setMessage(err);
    }
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create Personal Account
          </h1>

          <form
            onSubmit={handleSubmit(formSubmit)}
            autoComplete="off"
            className={`${styles.form_container} -mt-2 flex justify-center items-center flex-col`}
          >
            <div className="form-control">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fullname
              </label>
              <input
                {...register('fullName', {
                  required: 'First Name is required'
                })}
                type="text"
                autoComplete="false"
                placeholder="Fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.fullName?.message && <small className="block text-red-600">{errors.fullName.message}</small>}
            </div>
            <div className="form-control">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                })}
                type="email"
                placeholder="Email"
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.email?.message && <small className="block text-red-600">{errors.email.message}</small>}
            </div>

            <div className="form-control">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
                })}
                autoComplete="new-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.password?.message && <small className="block text-red-600">{errors.password.message}</small>}
            </div>

            <div className="flex flex-col w-full items-center px-2 mt-5">
              <p className="w-full text-left">
                <Link href="/login" className="text-black hover:text-primaryColor hover:underline">
                  {' '}
                  Login with an existing account
                </Link>
              </p>
              {message && <small className="block text-red-600">{message}</small>}
              <button className="w-full flex justify-center items-center" type="submit" disabled={isSubmitting}>
                <span className="text-center flex-1  mt-6 bg-indigo-600 hover:bg-indigo-500 hover:font-semibold rounded-md p-[1rem] px-4  text-white cursor-pointer">
                  Register
                </span>
              </button>
            </div>
            {isSubmitting && <Loader />}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
