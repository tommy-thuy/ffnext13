import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import NextTopLoader from 'nextjs-toploader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GenresProvider } from '@/context/genres';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] });
import type { Metadata } from 'next'
import AuthProvider from '@/context/AuthProvider'


export const metadata: Metadata = {
  title: 'Movie Friend',
  description: 'Movie Friend example',
}

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
        <AuthProvider>
        {/* <SWRConfig value={{ fetcher }}> */}
          <GenresProvider>
            {/* <ThemeProvider enableSystem attribute='class'> */}
            <Header />
            {children}
            <Footer />
            {/* </ThemeProvider> */}

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
        {/* </SWRConfig> */}
        </AuthProvider>
      </body>
    </html>
  );
}

