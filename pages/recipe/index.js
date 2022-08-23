// import { getPosts } from '../../services';
// import Categories from '../../components/Categories';
// import PostCard from '../../components/PostCard';
// import PostWidget from '../../components/PostWidget';
import Layout from '../../components/Layout';

const BlogScreen = ({ recipes }) => {
  return (
    <Layout title={'Next Level Partners Post Page'}>
      <div className="mx-auto my-8 px-4 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1 md:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <h1 className="text-4xl mt-20 py-20 text-center">TEST</h1>
            {recipes.results.map((recipe) => (
              <div key={recipe.id} className="test">
                <p> Recipe title: {recipe.title}</p>
                <div className="w-[150px] h-[150px]">
                  <img src={recipe.image} alt="" />
                </div>
              </div>
            ))}
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
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}&query=cake`
  );

  const recipes = await response.json();

  return {
    props: { recipes },
    revalidate: 10,
  };
};
