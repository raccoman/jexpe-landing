import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>        
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-209924572-1">
      </Script>
      <Script strategy="lazyOnload" id="google-analytics">
        {
          `
          window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', 'UA-209924572-1');
      `
        }
      </Script>
      <Component {...pageProps} />
      </>)
}

export default MyApp
