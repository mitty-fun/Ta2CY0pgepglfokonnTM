import Link from 'next/link';
import styles from './page.module.css';

const carDetails = {
  1: {
    name: 'BMW X5',
    price: 'NT$ 3,200,000',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop&crop=center'
    ],
    specs: {
      engine: '3.0L 直列6缸渦輪增壓',
      power: '340hp',
      transmission: '8速自排',
      drivetrain: 'AWD四輪驅動',
      fuelEconomy: '11.8 km/L'
    },
    features: [
      '豪華真皮內裝',
      'iDrive 7.0 資訊娛樂系統',
      '全景天窗',
      '自動駕駛輔助系統',
      'Harman Kardon 音響系統',
      '電動尾門',
      '無線充電板',
      '360度環景攝影'
    ],
    description: 'BMW X5 結合了豪華舒適與卓越性能，是中大型豪華 SUV 的標竿之作。配備先進的駕駛輔助系統和豪華配備，為您提供完美的駕乘體驗。'
  },
  2: {
    name: 'Mercedes-Benz C-Class',
    price: 'NT$ 2,800,000',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop&crop=center'
    ],
    specs: {
      engine: '2.0L 直列4缸渦輪增壓',
      power: '258hp',
      transmission: '9G-TRONIC 9速自排',
      drivetrain: '後輪驅動',
      fuelEconomy: '13.2 km/L'
    },
    features: [
      'MBUX 智能座艙',
      '12.3吋數位儀表板',
      'ARTICO 人造皮革座椅',
      '主動煞車輔助系統',
      'Burmester 環場音響',
      '電動座椅記憶功能',
      '智能LED頭燈',
      '手機無線充電'
    ],
    description: 'Mercedes-Benz C-Class 展現德系豪華房車的精髓，融合先進科技與經典設計，提供舒適優雅的駕乘體驗。'
  }
};

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' }
  ];
}

export default async function CarDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const car = carDetails[parseInt(resolvedParams.id) as keyof typeof carDetails];
  
  if (!car) {
    return <div>車輛不存在</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="/cars">← 返回車款列表</Link>
      </div>

      <div className={styles.carDetail}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <img src={car.images[0]} alt={car.name} />
          </div>
          <div className={styles.thumbnails}>
            {car.images.map((image, index) => (
              <img key={index} src={image} alt={`${car.name} ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className={styles.carInfo}>
          <h1>{car.name}</h1>
          <div className={styles.price}>{car.price}</div>
          <p className={styles.description}>{car.description}</p>
          
          <div className={styles.contact}>
            <button className={styles.contactButton}>立即詢價</button>
            <button className={styles.testDriveButton}>預約試駕</button>
          </div>
        </div>
      </div>

      <div className={styles.specifications}>
        <h2>規格資訊</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>引擎</span>
            <span className={styles.specValue}>{car.specs.engine}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>最大馬力</span>
            <span className={styles.specValue}>{car.specs.power}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>變速箱</span>
            <span className={styles.specValue}>{car.specs.transmission}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>傳動系統</span>
            <span className={styles.specValue}>{car.specs.drivetrain}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>油耗</span>
            <span className={styles.specValue}>{car.specs.fuelEconomy}</span>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <h2>主要配備</h2>
        <div className={styles.featuresGrid}>
          {car.features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}