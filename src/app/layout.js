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





const sections = [
  { title: 'Home', url: '/' },
  { title: 'Projects', url: '/projects' },
  { title: 'Contact', url: '/contact' },
  { title: 'About', url: '/about' },
];





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* <CssBaseline /> */}







          {/* <Overlay /> */}




          <Header title="Julian Ayllon" sections={sections} />









          {children}






          <Footer
            title="Get In Touch!"
          />


        </ThemeRegistry>
      </body>
    </html>
  )
};
