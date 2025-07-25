import Link from 'next/link';
import styles from './page.module.css';

const cars = [
  {
    id: 1,
    name: 'BMW X5',
    price: 'NT$ 3,200,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center',
    features: ['豪華內裝', 'AWD四輪驅動', '自動駕駛輔助']
  },
  {
    id: 2,
    name: 'Mercedes-Benz C-Class',
    price: 'NT$ 2,800,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&crop=center',
    features: ['智能座艙', '主動安全系統', '頂級音響']
  },
  {
    id: 3,
    name: 'Audi A4',
    price: 'NT$ 2,500,000',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&crop=center',
    features: ['Quattro系統', '虛擬座艙', '動態懸吊']
  },
  {
    id: 4,
    name: 'Tesla Model S',
    price: 'NT$ 3,500,000',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&crop=center',
    features: ['純電動力', '自動駕駛', '超長續航']
  },
  {
    id: 5,
    name: 'Porsche 911',
    price: 'NT$ 5,200,000',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&crop=center',
    features: ['跑車性能', '經典設計', '賽車基因']
  },
  {
    id: 6,
    name: 'Lexus RX',
    price: 'NT$ 2,900,000',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop&crop=center',
    features: ['油電混合', '豪華舒適', '可靠品質']
  }
];

export default function Cars() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>精選車款</h1>
        <p>為您精心挑選的優質汽車</p>
      </section>

      <section className={styles.carsGrid}>
        {cars.map(car => (
          <div key={car.id} className={styles.carCard}>
            <div className={styles.carImage}>
              <img src={car.image} alt={car.name} />
              <div className={styles.priceTag}>{car.price}</div>
            </div>
            <div className={styles.carInfo}>
              <h3>{car.name}</h3>
              <ul className={styles.features}>
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link href={`/cars/${car.id}`} className={styles.detailButton}>
                查看詳情
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}