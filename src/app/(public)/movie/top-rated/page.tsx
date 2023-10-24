import InfiniteLoadingList from '@/components/InfiniteLoadingList';
import TitleWithBackButton from '@/components/TitleWithBackButton';

const MovieTopRatedPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithBackButton title="Top Rated" />
          <InfiniteLoadingList url="movie/top_rated" mediaType="movie" />
        </main>
      </div>
    </div>
  );
};

export default MovieTopRatedPage;
