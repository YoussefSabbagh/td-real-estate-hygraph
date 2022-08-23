import { getPosts } from '../../services';
import Categories from '../../components/Categories';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Layout from '../../components/Layout';

const BlogScreen = ({ posts }) => {
  return (
    <Layout title={'Next Level Partners Post Page'}>
      <div className="mx-auto my-8 px-4 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1 md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.node.id} className="test">
                <PostCard post={post.node} />
              </div>
            ))}
          </div>
          <div>
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogScreen;
BlogScreen.auth = true;

// Fetch data at build time
export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
    revalidate: 10,
  };
};
