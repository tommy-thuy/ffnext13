import InfiniteLoadingList from '@/components/InfiniteLoadingList';
import TitleWithBackButton from '@/components/TitleWithBackButton';

const TvTopRatedPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithBackButton title="Top Rated" />
          <InfiniteLoadingList url="tv/top_rated" mediaType="tv" />
        </main>
      </div>
    </div>
  );
};

export default TvTopRatedPage;
