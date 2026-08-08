import { Link } from 'react-router-dom';
import { Video, Building2, ArrowRight } from 'lucide-react';
import styles from './RoleSelect.module.css';

export default function RoleSelect() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoMark}>W</div>
        <span className={styles.logoText}>WHO</span>
      </Link>

      <h1 className={styles.heading}>Como deseja usar a WHO?</h1>
      <p className={styles.subtitle}>Escolha seu perfil para continuar</p>

      <div className={styles.cards}>
        <Link to="/signup?role=talent" className={styles.card}>
          <div className={styles.cardIconWrap}>
            <Video size={32} />
          </div>
          <h2 className={styles.cardTitle}>Sou um Talento</h2>
          <p className={styles.cardDescription}>
            Mostre suas habilidades reais em vídeo e seja descoberto por empresas que valorizam o que 
            você faz de verdade — sem filtro de currículo.
          </p>
          <span className={styles.cardCta}>
            Começar como talento
            <ArrowRight size={16} />
          </span>
        </Link>

        <Link to="/signup?role=company" className={styles.card}>
          <div className={styles.cardIconWrap}>
            <Building2 size={32} />
          </div>
          <h2 className={styles.cardTitle}>Sou uma Empresa</h2>
          <p className={styles.cardDescription}>
            Descreva sua necessidade operacional e encontre profissionais com competência comprovada — 
            seleção cega baseada em evidência real.
          </p>
          <span className={styles.cardCta}>
            Começar como empresa
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      <Link to="/" className={styles.backLink}>
        ← Voltar para o início
      </Link>
    </div>
  );
}
