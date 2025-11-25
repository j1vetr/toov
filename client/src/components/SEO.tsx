import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | TOOV</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | TOOV`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={`${title} | TOOV`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
