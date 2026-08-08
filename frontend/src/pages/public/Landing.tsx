import { Link } from 'react-router-dom';
import { Video, Brain, Eye, Sparkles, Building2, ArrowRight } from 'lucide-react';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landing}>
      {/* Animated background pattern */}
      <div className={styles.bgPattern}>
        <div className={styles.bgCircle} />
        <div className={styles.bgCircle} />
        <div className={styles.bgCircle} />
      </div>

      {/* Top bar */}
      <header className={styles.topBar}>
        <Link to="/" className={styles.logoSection}>
          <div className={styles.logoMark}>W</div>
          <span className={styles.logoText}>WHO</span>
        </Link>
        <nav className={styles.topBarLinks}>
          <Link to="/login" className={styles.topBarLink}>
            Entrar
          </Link>
          <Link to="/signup" className={`${styles.topBarLink} ${styles.topBarLinkPrimary}`}>
            Criar Conta
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <span className={styles.heroTagDot} />
          Plataforma de talentos baseada em evidência
        </div>

        <h1 className={styles.heroTitle}>
          Encontre talentos pelo que eles{' '}
          <span className={styles.heroTitleAccent}>fazem</span>, não pelo que dizem
        </h1>

        <p className={styles.heroSubtitle}>
          A WHO conecta demonstrações reais de habilidades com necessidades operacionais 
          reais. Sem currículo. Sem viés. Apenas competência comprovada em vídeo.
        </p>

        <div className={styles.heroCtas}>
          <Link to="/talent/dashboard" className={styles.ctaPrimary}>
            <Sparkles size={20} />
            Quero mostrar o que sei fazer
            <ArrowRight size={18} />
          </Link>
          <Link to="/company/dashboard" className={styles.ctaSecondary}>
            <Building2 size={20} />
            Quero encontrar um profissional
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <p className={styles.sectionLabel}>Como funciona</p>
        <h2 className={styles.sectionTitle}>Três passos para o match perfeito</h2>

        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <div className={styles.stepIconWrap}>
              <Video size={28} />
            </div>
            <h3 className={styles.stepTitle}>Demonstre na prática</h3>
            <p className={styles.stepDescription}>
              O talento grava um vídeo curto demonstrando suas habilidades em uma tarefa real, sem edição e sem roteiro.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <div className={styles.stepIconWrap}>
              <Building2 size={28} />
            </div>
            <h3 className={styles.stepTitle}>Descreva a dor</h3>
            <p className={styles.stepDescription}>
              A empresa descreve sua necessidade operacional real — o problema que precisa resolver no dia-a-dia.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <div className={styles.stepIconWrap}>
              <Brain size={28} />
            </div>
            <h3 className={styles.stepTitle}>Match inteligente</h3>
            <p className={styles.stepDescription}>
              A IA analisa o vídeo e conecta o talento certo à vaga certa — de forma cega, justa e baseada em evidência.
            </p>
          </div>
        </div>
      </section>

      {/* Board preview mockup */}
      <section className={styles.boardPreview}>
        <div className={styles.boardMockup}>
          <div className={styles.boardHeader}>
            <span className={styles.boardHeaderTitle}>
              <Eye size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />
              WHO Board — Visão da Empresa
            </span>
            <span className={styles.boardHeaderBadge}>12 candidatos</span>
          </div>
          <div className={styles.boardColumns}>
            <div className={styles.boardColumn}>
              <div className={styles.boardColumnTitle}>Novos</div>
              <div className={styles.boardCard}>
                <div className={styles.boardCardLabel}>Talento #4829</div>
                <div className={styles.boardCardMeta}>Vídeo · 2:34 min</div>
                <div className={styles.boardCardTag}>92% match</div>
              </div>
              <div className={styles.boardCard}>
                <div className={styles.boardCardLabel}>Talento #7153</div>
                <div className={styles.boardCardMeta}>Vídeo · 1:58 min</div>
                <div className={styles.boardCardTag}>87% match</div>
              </div>
            </div>
            <div className={styles.boardColumn}>
              <div className={styles.boardColumnTitle}>Em análise</div>
              <div className={styles.boardCard}>
                <div className={styles.boardCardLabel}>Talento #3021</div>
                <div className={styles.boardCardMeta}>Vídeo · 3:12 min</div>
                <div className={styles.boardCardTag}>95% match</div>
              </div>
            </div>
            <div className={styles.boardColumn}>
              <div className={styles.boardColumnTitle}>Entrevista</div>
              <div className={styles.boardCard}>
                <div className={styles.boardCardLabel}>Talento #8847</div>
                <div className={styles.boardCardMeta}>Agendada 14/07</div>
                <div className={styles.boardCardTag}>91% match</div>
              </div>
            </div>
            <div className={styles.boardColumn}>
              <div className={styles.boardColumnTitle}>Contratado</div>
              <div className={styles.boardCard}>
                <div className={styles.boardCardLabel}>Talento #6190</div>
                <div className={styles.boardCardMeta}>Finalizado</div>
                <div className={styles.boardCardTag}>98% match</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2026 WHO Platform — Todos os direitos reservados.
      </footer>
    </div>
  );
}
