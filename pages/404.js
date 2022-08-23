import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../components/Layout';

const PageNonFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <Layout title={'Next Level Partners Home Page'}>
      <section className="m-20 p-20 flex flex-col justity-center items-center">
        <div className="w-screen-md bg-blue-200 p-10 rounded-xl card content">
          <h1 className="text-2xl">404</h1>
          <h2 className="text-xl">Ooops! That page cannot be found :( </h2>
          <p>
            Redirecting to the <Link href="/"> Homepage </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PageNonFound;
