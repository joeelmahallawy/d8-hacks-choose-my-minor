import { ChakraProvider, theme } from "@chakra-ui/react";
import App, { AppContext, AppProps } from "next/app";
import React from "react";

const MyApp = (props) => (
  <>
    <ChakraProvider theme={theme}>
      <props.Component {...props.pageProps} />
    </ChakraProvider>
  </>
);

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // get app initial props (component and pageProps)
//   const appProps = await App.getInitialProps(appContext);
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}/api/stats`,
//     {
//   headers: { Cookie: appContext.ctx.req.headers.cookie },
//     }
//   );
//   const userData = await res.text();
//   if (!userData) return { ...appProps, user: null };
//   //   const userData = await res.text();
//   else {
//     const user = JSON.parse(userData);
//     return { ...appProps, user };
//   }
// };

export default MyApp;
