import InfiniteLoadingList from '@/components/InfiniteLoadingList';
import TitleWithBackButton from '@/components/TitleWithBackButton';

const MoviePopularPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithBackButton title="Popular" />
          <InfiniteLoadingList url="movie/popular" mediaType="movie" />
        </main>
      </div>
    </div>
  );
};

export default MoviePopularPage;
