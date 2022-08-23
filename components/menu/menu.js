import Image from 'next/image';
import styles from './menu.module.scss';

const MenuDetail = ({ data }) => {
  return (
    <section className={styles.section}>
      {data.map((menu, ix) => {
        return (
          <div
            key={menu.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
          >
            <div
              className={
                ix % 2 === 0
                  ? styles.image__container
                  : `${styles.image__container} ${styles.left}`
              }
            >
              <Image
                className={styles.image}
                src={menu.img}
                alt={menu.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.menu__detail}>
              <h2 className={styles.title}>{menu.title}</h2>
              <div className={styles.wrapper}>
                {menu.menu.map((product, index) => {
                  return (
                    <article className={styles.card} key={index}>
                      <div>
                        <div className={`${styles.info}`}>
                          <div className={styles.product}>
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.desc}>{product.desc}</p>
                          </div>
                          <p className={styles.price}>$ {product.price}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuDetail;
