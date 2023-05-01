import Authenticator from '@/app/context/Authenticator';
import Layouts from '@/app/layouts/Layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      <Layouts>
        <Component {...pageProps} />
        <ToastContainer />
      </Layouts>
    </Authenticator>
  )
}
