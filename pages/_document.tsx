import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import React from 'react';

class DocumentReady extends Document {

  static async getInitialPros(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);
    return { 
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          { CssBaseline.flush() }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}

export default DocumentReady;
