import styles from './page.module.css';

const teamMembers = [
  {
    id: 1,
    name: '張經理',
    position: '銷售經理',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: '擁有15年汽車銷售經驗，專精於豪華車款銷售'
  },
  {
    id: 2,
    name: '李顧問',
    position: '資深銷售顧問',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    description: '客戶滿意度第一名，專業熱誠的服務態度'
  },
  {
    id: 3,
    name: '王技師',
    position: '技術顧問',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: '汽車技術專家，提供專業的技術諮詢服務'
  },
  {
    id: 4,
    name: '陳專員',
    position: '客服專員',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: '負責售後服務，確保客戶獲得最佳體驗'
  }
];

export default function Team() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>我們的團隊</h1>
        <p>專業、熱忱、值得信賴的汽車銷售團隊</p>
      </section>

      <section className={styles.teamGrid}>
        {teamMembers.map(member => (
          <div key={member.id} className={styles.memberCard}>
            <div className={styles.memberImage}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.memberInfo}>
              <h3>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}