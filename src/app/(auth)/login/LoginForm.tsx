'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './Form.module.css';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';
import GoogleButton from '../GoogleButton';
import GithubButton from '../GithubButton';
import Loader from '../loading';
import Image from 'next/image';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const params = useSearchParams()!;
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    setError(params.get('error'));
  }, [params]);

  if (session.status === 'authenticated') {
    router?.push('/my/dashboard');
  }

  const formSubmit: SubmitHandler<Inputs> = (form) => {
    const { email, password } = form;
    signIn('credentials', {
      email,
      password
    });
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className={`${styles.form_container} flex justify-center items-center flex-col`}
          >
            <h2 className={`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}>
              Log In
            </h2>

            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
                })}
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.email?.message && <small className="block text-red-600 w-full">{errors.email.message}</small>}
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required'
                })}
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.password?.message && (
                <small className="block text-red-600 w-full">{errors.password.message}</small>
              )}
            </div>
            <div className={`flex flex-col justify-center w-full items-center px-2`}>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center">
                <span className="text-center flex-1  mt-6 bg-indigo-600 hover:bg-indigo-500 hover:font-semibold rounded-md p-[1rem] px-4  text-white cursor-pointer">
                  Log in
                </span>
              </button>
              <p className={`py-6  text-[#707a8a] text-center ${styles.login_continue}`}>
                <span className="mr-1 "> Or</span>
              </p>
            </div>
            <div className="flex w-full justify-center px-2 text-lg items-center">
              <GoogleButton />
            </div>
            <div className="flex w-full justify-center px-2 text-lg items-center">
              <GithubButton />
            </div>
            {error && <small className="block w-full px-2 text-red-600">{error}</small>}

            <div className="py-4 px-2 w-full">
              <p>
                <Link href="/register" className="text-black hover:text-primaryColor hover:underline">
                  {' '}
                  Create an Account
                  <BsArrowRightCircleFill className="ml-2" />
                </Link>
              </p>
            </div>
            {isSubmitting && <Loader />}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
