import './globals.css';
import AuthProvider from '@/context/AuthProvider';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import NextTopLoader from 'nextjs-toploader';
import { GenresProvider } from '@/context/genres';
import type { Metadata } from 'next';
import MovieSWRConfig from '@/context/MovieSWRConfig';
import GlobalContextProvider from '@/context/GlobalContextProvider';
import ToastifyProvider from '@/context/ZustandPortfolio/ToastifyProvider';
import ReactQueryProvider from '@/context/ZustandPortfolio/ReactQueryProvider';
import { AosProvider } from '@/context/ZustandPortfolio/AosProvider';

const APP_NAME = 'Movie Friend 2023';
const APP_DESCRIPTION =
  'Welcome to Coder - your destination to discover more about runner, its projects, skills and softskills.';

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['portfolio', 'Zustand'],
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  authors: [
    { name: 'tommy-thuy-0b9462128' },
    { name: 'tommy-thuy-0b9462128', url: 'https://www.linkedin.com/in/tommy-thuy-0b9462128/' }
  ],
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

  openGraph: {
    type: 'website',
    url: 'https://expressmagazine.net/',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: 'https://expressmagazine.net/sites/default/files/images/2018/03/web-development-ho-chi-minh-city.png'
      }
    ]
  },

  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/favicon.ico' }
  ]
};

//const inter = Inter({ subsets: ['latin'], weight: ['300', '500', '700'], display: 'swap' });
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#FFD948"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FFD948,0 0 5px #FFD948"
        />
        <GlobalContextProvider>
          <AuthProvider>
            <MovieSWRConfig>
              <GenresProvider>
                <ReactQueryProvider>
                  <AosProvider>
                    <ToastifyProvider>
                      <div className="flex flex-col min-h-screen w-full">
                        <Header />
                        {children}
                        {modal}
                        <Footer />
                      </div>
                    </ToastifyProvider>
                  </AosProvider>
                </ReactQueryProvider>
              </GenresProvider>
            </MovieSWRConfig>
          </AuthProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
