import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </Head>
      <body className="break-keep selection:bg-PRIMARY_LIGHT selection:dark:text-BLACK">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
