import Head from "next/head";

import { Navbar, Footer } from "../components";
import { About, Contact, Home, Projects, Skills } from "@/containers";

export default function App() {
  return (
    <>
      <Head>
        <title>Ignacio Rodriguez Rulas | Portafolio</title>
        <meta charSet="UTF-8" />
        <meta name="title" content="Ignacio Rodriguez Rulas Website" />
        <meta
          name="description"
          content="This is my personal website where you can see information about me and my projects"
        />
        <meta
          name="keywords"
          content="Ignacio, Rodriguez, Rulas, websites, JavaScript, HyperText, Markup, Languaje, Cascading Style Sheets, frameworks"
        />
        <meta name="author" content="Ignacio Rodriguez Rulas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="rating" content="safe for kids" />
        <meta property="og:url" content="www.ignaciocodev.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ignacio Rodriguez Rulas Website" />
        <meta
          property="og:description"
          content="This is my personal website where you can see information about me and my projects"
        />
        <meta property="og:image" content="/Websiteimg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className="app">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
