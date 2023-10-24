import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen ml:h-screen lg:py-0">
      <div className="flex items-center mb-6 w-full h-[100px] relative">
        <Image
          className="mx-auto h-10 w-auto"
          layout='fill'
          src="/assets/images/the-movie-db-logo.svg"
          alt=""
        />
      </div>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Profile
          </h1>
          <div>
            {session?.user?.name ? <h2>Hello {session.user.name}!</h2> : null}

            {session?.user?.image ? (
              <Image
                src={session.user.image}
                layout='fill'
                alt={`Profile Pic for ${session.user.name}`}
                priority={true}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
