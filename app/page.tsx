import Link from 'next/link';
import styles from './page.module.css';

const featuredCars = [
  {
    id: 1,
    name: 'BMW X5',
    price: 'NT$ 3,200,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 2,
    name: 'Mercedes-Benz C-Class',
    price: 'NT$ 2,800,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&crop=center'
  },
  {
    id: 3,
    name: 'Tesla Model S',
    price: 'NT$ 3,500,000',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&crop=center'
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img 
            src="/tesla-model-y-banner.avif" 
            alt="全新 Model Y"
          />
        </div>
        <div className={styles.heroContent}>
          <h1>全新 Model Y</h1>
          <p className={styles.subtitle}>預估交車期</p>
          <div className={styles.heroButtons}>
            <Link href="/cars" className={styles.primaryButton}>立即訂購</Link>
            <Link href="/about" className={styles.secondaryButton}>了解更多</Link>
          </div>
        </div>
        <div className={styles.heroNavigation}>
          <button className={styles.navButton}>‹</button>
          <button className={styles.navButton}>›</button>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2>為什麼選擇我們</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>精選車款</h3>
              <p>嚴選各大品牌優質車款，品質保證</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>合理價格</h3>
              <p>透明公開的定價策略，讓您買得安心</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>專業服務</h3>
              <p>經驗豐富的團隊，提供全方位服務</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✅</div>
              <h3>品質保證</h3>
              <p>完整的售後保固，讓您使用無憂</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredCars}>
        <div className={styles.featuredContainer}>
          <h2>精選推薦</h2>
          <div className={styles.carsGrid}>
            {featuredCars.map(car => (
              <div key={car.id} className={styles.carCard}>
                <div className={styles.carImage}>
                  <img src={car.image} alt={car.name} />
                </div>
                <div className={styles.carInfo}>
                  <h3>{car.name}</h3>
                  <p className={styles.carPrice}>{car.price}</p>
                  <Link href={`/cars/${car.id}`} className={styles.viewButton}>
                    查看詳情
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAllButton}>
            <Link href="/cars">查看所有車款</Link>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactContainer}>
          <h2>聯絡我們</h2>
          <p>歡迎來電或來店洽詢，我們將為您提供最專業的服務</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>電話:</strong> (02) 1234-5678
            </div>
            <div className={styles.contactItem}>
              <strong>地址:</strong> 台北市信義區汽車街123號
            </div>
            <div className={styles.contactItem}>
              <strong>營業時間:</strong> 週一至週六 9:00-18:00
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
