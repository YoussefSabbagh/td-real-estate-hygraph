import Layout from '../../components/Layout';
import HeroMenu from '../../components/menu/menuhero';

import { MenuData } from '../../components/Products/data';
import MenuDetail from '../../components/menu/menu';
import Especial from '../../components/home/especial';

const MenuScreen = () => {
  return (
    <Layout title={"Marias's Dessert Menu"}>
      <section id="menu" className="mt-[var(--header-height)]">
        <HeroMenu />
        <Especial />
        <MenuDetail data={MenuData} />
      </section>
    </Layout>
  );
};

export default MenuScreen;
