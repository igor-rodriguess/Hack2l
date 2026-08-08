import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    }

    setLoading(true);

    // Simulated login — check for demo credentials
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email.includes('empresa') || email.includes('company')) {
      // Simulate company login
      navigate('/company/dashboard');
    } else {
      // Default to talent login
      navigate('/talent/dashboard');
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      {/* Branded left panel */}
      <div className={styles.brandPanel}>
        <div className={styles.brandLogo}>
          <div className={styles.brandLogoMark}>W</div>
          <span className={styles.brandLogoText}>WHO</span>
        </div>
        <h2 className={styles.brandHeadline}>
          Competência real, oportunidades reais
        </h2>
        <p className={styles.brandSubtext}>
          Entre na plataforma que conecta talentos e empresas através de demonstrações práticas de habilidades.
        </p>
      </div>

      {/* Form panel */}
      <div className={styles.formPanel}>
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Entrar</h1>
          <p className={styles.formSubtitle}>
            Bem-vindo de volta à WHO
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="password">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <Link to="/forgot-password" className={styles.forgotLink}>
              Esqueceu a senha?
            </Link>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>ou</span>
            <div className={styles.dividerLine} />
          </div>

          <p className={styles.switchLink}>
            Não tem uma conta?{' '}
            <Link to="/signup" className={styles.switchLinkAnchor}>
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
