
'use client'

import { Provider } from "react-redux";
import { store } from "../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import GoogleTagManager from "@/components/services/googleTag/googleTag"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          <script dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-PZPFCFBK');`
          }}></script>
        </head>
        {/* <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap" /> */}
        <meta name="google-site-verification" content="sKdtPF8a1KsZr1GKPyxbLh3PNWsxnwbBbo3mVY_EZGc" />
        <link type="image/x-icon" rel="icon" href="./favicon.ico" />
      </head>
      <body >
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZPFCFBK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>

        <Provider store={store}>
          {children}
        </Provider>

        <ScrollToTop />
      </body>
    </html>
  )
}
