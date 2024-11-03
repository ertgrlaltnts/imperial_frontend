import Head from "next/head";

const SEO = ({ pageTitle, description }) => (
  <>
    <Head>
      <title> {pageTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta charset="UTF-8" />
      <meta name="author" content="Wesoco Teknoloji & Danışmanlık" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);
 
export default SEO;
