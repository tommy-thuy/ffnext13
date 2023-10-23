'use client'
import { SWRConfig } from 'swr';

const fetcher = (url: string) => {
  const prefix = url.includes('?') ? '&' : '?';
  return fetch(`https://api.themoviedb.org/3/${url}${prefix}api_key=1886afcba942e823d77e420019b69f52`).then((res) =>
    res.json()
  );
};

export default function MovieSWRConfig({ children }: {
  children: React.ReactNode
}) { 
  return (
    <SWRConfig value={{ fetcher }}>   
      {children}    
    </SWRConfig> 
  )
}
