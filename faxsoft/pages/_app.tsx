import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add("h-full");
    }
    const html = document.querySelector('html');
    if (html) {
      html.classList.add('h-full')
      // html.classList.add('bg-gray-50');
    }    
  });

  return <Component {...pageProps} />
}
