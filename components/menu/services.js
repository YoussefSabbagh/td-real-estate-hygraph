import { servicesData } from './servicesData';
import styles from './services.module.scss';
import Image from 'next/image';

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <div className={styles.grid_services}>
        <h2 className={styles.title}> What we can do for you</h2>
        <p className={styles.subtitle}>
          We work with you to develop a strategic roadmap toward your goals and
          objectives
        </p>

        <div className={styles.servicesContainer}>
          <article className={styles.servicesCards}>
            {servicesData.map((service) => {
              return (
                <div className={styles.cardBox} key={service.id}>
                  <div className={styles.front}>
                    <Image
                      alt={service.title}
                      height="100px"
                      width="100px"
                      className="rounded-full align-middle"
                      src={service.img}
                    />
                    <h2 className={styles.subtitle}>{service.title}</h2>
                  </div>
                  <div className={styles.back}>
                    <h2 className={styles.subtitle}>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
