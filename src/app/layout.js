import * as React from 'react';
// import './globals.css'

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

// import CssBaseline from '@mui/material/CssBaseline';
import Header from './_components/Header';
import Footer from './_components/Footer';
import ThemeRegistry from './_components/ThemeRegistry/ThemeRegistry';

// import Overlay from './_components/Overlay';

export const metadata = {
  title: 'Julian Ayllon',
  description: 'Fullstack Web Developer based out of New Jersey',
}









export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
        <ThemeRegistry>
          {/* <CssBaseline /> */}







          {/* <Overlay /> */}




          {/* <Header title="Julian Ayllon" /> */}
          <Header/>









          {children}






          <Footer
            title="Get In Touch!"
          />


        </ThemeRegistry>
      </body>
    </html>
  )
};
