import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600&family=Syncopate:wght@700&family=Fira+Code:wght@400;500&family=Playfair+Display:wght@700&Cardo:wght@400&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#0C0E13" />
          <meta
            name="description"
            content="Jericho Bantiquete is a software engineer based in Philippines who specializes in building responsive websites."
          />
          <meta name="author" content="Jericho P. Bantiquete" />
          <meta name="copyright" content="Jericho P. Bantiquete" />
          <meta
            name="keywords"
            content="portfolio, front-end portfolio,  jericho, jericho bantiquete, software engineer portfolio"
          />
          <meta
            property="og:url"
            content="https://jerichobantiquete.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jericho Bantiquete" />
          <meta
            property="og:description"
            content="Jericho Bantiquete is a software engineer based in Philippines who specializes in building responsive websites."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/D7ZpgxX/jericho-bantiquete.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@monciego" />
          <meta
            property="twitter:url"
            content="https://jerichobantiquete.vercel.app/"
          />
          <meta name="twitter:title" content="Jericho Bantiquete" />
          <meta
            name="twitter:description"
            content="Jericho Bantiquete is a front-end developer based in Philippines who specializes in building responsive websites."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/D7ZpgxX/jericho-bantiquete.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
