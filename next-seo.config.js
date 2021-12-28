/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "cairo-by-example",
  titleTemplate: "%s",
  defaultTitle: "cairo-by-example",
  description: "Verbosely Documented, Minimal Starknet Contract Examples",
  canonical: "https://cairo-by-example.xyz",
  openGraph: {
    url: "https://cairo-by-example.xyz",
    title: "cairo-by-example",
    description: "Verbosely Documented, Minimal Starknet Contract Examples",
    images: [
      {
        url: "https://cairo-by-example.com/cairo.png",
        alt: "cairo-by-example logo",
      },
    ],
    site_name: "cairo-by-example",
  },
  twitter: {
    handle: "@a5f9t4",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
