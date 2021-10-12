import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-209924572-1" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-209924572-1');
        `}
      </Script>
      <Script id="hotjar" strategy="lazyOnload">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2648137,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <Component {...pageProps} />
    </>)
}

export default MyApp
