'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type ToastifyProviderProps = {
  children: React.ReactNode
}

const ToastifyProvider = ({ children }: ToastifyProviderProps) => {
  return (
    <>
      <ToastContainer />
      {/* <ToastContainer
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
      /> */}
      {children}
    </>
  )
}

export default ToastifyProvider
