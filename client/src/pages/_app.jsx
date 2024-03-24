import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";
import { Poppins } from "next/font/google"
import Container from "@/components/container";


const poppins = Poppins( {
  subsets: ["latin"],
  weight: ["400", "700"]
})


export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={ initialState } reducer={ reducer }>
      <Container>
      <Head>
        <title>
          MSocial
        </title>
        <link rel="shortcut icon" href="/logo.png"/>
      </Head>
      <div className={`${poppins.className}`}>
        <Component { ...pageProps } />
        </div>
        </Container>
    </StateProvider>
  );
}
