import "~/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import BackToTop from "~/components/BackToTop";
import Loader from "~/components/Loader";
import { useRouter } from "next/router";
// contents
import contentEN from "~/webContent/contentEN";
import contentTA from "~/webContent/contentTA";
import Header from "~/components/Header";
import Footer from "~/components/Footer";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [top, setTop] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [langListner, setLangListner] = React.useState(null);
  const [navData, setNavData] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");

    addEventListener("scroll", () => {
      setTop(false);
      if (window.scrollY > 200) {
        setTop(true);
      }
    });
    loaderSpin();
  }, []);

  React.useEffect(() => {
    setLangListner(typeof window !== 'undefined' && localStorage.getItem('lang') || "EN");
    getMatchData(router.asPath);

    router.events.on('routeChangeStart', getMatchData);
    return () => {
      router.events.off('routeChangeStart', getMatchData);
    }
  }, [langListner])

  function getMatchData(url) {
    setLoader(false);
    const path = url.split('?')[0].replace("#", "");
    if (langListner && langListner === "EN") {
      var data = contentEN[path];
      setNavData(contentEN.nav);
      setData(data);
    } else {
      var data = contentTA[path];
      setNavData(contentTA.nav);
      setData(data);
    }
    loaderSpin();
  };

  function handleLanguage(value) {
    console.log("caasas", value);
    if (value === "EN") {
      localStorage.setItem("lang", "EN");
      window.location.reload()
    } else {
      localStorage.setItem("lang", "TA");
      window.location.reload()
    }
    loaderSpin();
  }

  function loaderSpin() { setTimeout(() => { setLoader(true) }, 1000); };

  return (
    <React.Fragment>
      {(loader && data) ? <React.Fragment>
        <Header handleLanguage={handleLanguage} data={navData} lang={langListner} />
        <Component {...pageProps} data={data} />
        <Footer />
      </React.Fragment>
        : <Loader />}
      {top && <BackToTop />}
    </React.Fragment>
  );
}
