import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Footer';
import Header from './header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {title ? "Maria's Dessert " + title : "Maria's Dessert  Home Page"}
        </title>
        <meta name="description" content="Postres, Tortas Dulces" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
