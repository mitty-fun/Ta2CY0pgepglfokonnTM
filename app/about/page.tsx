import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>關於我們</h1>
          <p>專業汽車銷售，為您提供最優質的服務</p>
        </div>
        <div className={styles.heroImage}>
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center" 
            alt="汽車展示廳" 
          />
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>我們的故事</h2>
          <p>
            AutoShow 成立於 2010年，致力於為客戶提供最優質的汽車銷售服務。
            我們擁有超過十年的汽車銷售經驗，深度了解客戶需求，提供專業的購車建議。
          </p>
        </div>

        <div className={styles.section}>
          <h2>我們的使命</h2>
          <p>
            我們的使命是成為最值得信賴的汽車銷售夥伴，透過專業的服務和優質的產品，
            幫助每一位客戶找到最適合的愛車。
          </p>
        </div>

        <div className={styles.section}>
          <h2>我們的願景</h2>
          <p>
            成為業界領先的汽車銷售品牌，持續創新服務模式，
            為客戶創造更好的購車體驗。
          </p>
        </div>
      </section>
    </div>
  );
}