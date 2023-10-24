import InfiniteLoadingList from '@/components/InfiniteLoadingList';
import TitleWithBackButton from '@/components/TitleWithBackButton';

const TvAiringTodayPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithBackButton title="Airing Today" />
          <InfiniteLoadingList url="tv/airing_today" mediaType="tv" />
        </main>
      </div>
    </div>
  );
};

export default TvAiringTodayPage;
