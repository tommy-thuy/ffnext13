'use client';
import { usePathname, useSearchParams, useRouter   } from 'next/navigation'
import Icon from '../Icon';

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button className="bg-gray-800 rounded-full p-3 focus:outline-none" onClick={() => router.back()}>
      <Icon name="arrow-left" className="w-4 h-4 text-yellow-500" />
    </button>
  );
};

export default ButtonBack;
