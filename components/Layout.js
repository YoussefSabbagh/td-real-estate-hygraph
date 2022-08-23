import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Footer';
import Header from './header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? 'Jesus Guevara ' + title : 'Home Page'}</title>
        <meta name="description" content="bienes raices" />
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
