'use client';

import profileImage from './assets/about.png';
import SmallError from './helpers/SmallError';
import SmallLoader from './helpers/SmallLoader';
import SkeletonImageProfile from './helpers/SkeletonImageProfile';
import { ProfileResponse } from '@/types';
import { useProfileQuery } from '@/hooks/ZustandPortfolio/useZustandProfileQuery';

const About = () => {
  const { data, isError, isLoading } = useProfileQuery();

  const profile = data as ProfileResponse;

  return (
    <div className="flex flex-col my-10">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 transition-all">
        <article className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <SkeletonImageProfile src={profileImage} alt="profileImage" />
          <section className="flex min-h-[25rem] flex-col items-center">
            <h1 data-aos="fade-up" className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl">
              Who am I?
            </h1>

            {isLoading && <SmallLoader />}
            {isError && <SmallError />}

            {profile &&
              profile.profile.map((profile) => (
                <article key={profile.id}>
                  <p data-aos="fade-up" className="text-justify text-xl text-textDescription">
                    {profile.description_1}
                  </p>
                  <p data-aos="fade-up" className="text-justify text-xl text-textDescription">
                    {profile.description_2}
                  </p>
                </article>
              ))}
          </section>
        </article>
      </div>
    </div>
  );
};

export default About;
