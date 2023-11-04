'use client'
import { useParams } from 'next/navigation';
import { useDetails } from '@/hooks/useSWR';
import DetailsPage from '@/components/DetailsPage';

const TvDetailsPage = () => {

  const { id } = useParams();
  const { details, loading } = useDetails('tv', id);

  const tvDatails = {
    media_type: 'tv',
    ...details
  };

  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <DetailsPage details={tvDatails} loading={loading} />
        </main>
      </div>
    </div>
  );
};

export default TvDetailsPage;
