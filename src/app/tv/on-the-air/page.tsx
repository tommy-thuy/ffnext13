import InfiniteLoadingList from '@/components/InfiniteLoadingList';
import TitleWithBackButton from '@/components/TitleWithBackButton';

const TvOnTheAirPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithBackButton title="On the air" />
          <InfiniteLoadingList url="tv/on_the_air" mediaType="tv" />
        </main>
      </div>
    </div>
  );
};

export default TvOnTheAirPage;
