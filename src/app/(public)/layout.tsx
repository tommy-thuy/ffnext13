import './globals.css';
import AuthProvider from '@/context/AuthProvider';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GenresProvider } from '@/context/genres';


import type { Metadata } from 'next';
import MovieSWRConfig from '@/context/MovieSWRConfig';
import GlobalContextProvider from '@/context/GlobalContextProvider'
export const metadata: Metadata = {
  title: 'Movie Friend',
  description: 'Movie Friend example'
};
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
                <Header />
                {children}
                <Footer />
                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </GenresProvider>
            </MovieSWRConfig>
          </AuthProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
