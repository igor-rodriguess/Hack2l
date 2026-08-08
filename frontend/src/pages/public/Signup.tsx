import { useState, type FormEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Video, Building2 } from 'lucide-react';
import styles from './Signup.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = (searchParams.get('role') as 'talent' | 'company') || 'talent';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'talent' | 'company'>(initialRole);
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    if (role === 'company' && !companyName) {
      setError('Informe o nome da empresa.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    setLoading(true);

    // Simulated signup
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (role === 'company') {
      navigate('/company/dashboard');
    } else {
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
          Junte-se à revolução da seleção por competência
        </h2>
        <p className={styles.brandSubtext}>
          Crie sua conta gratuitamente e comece a conectar talento real com oportunidades reais.
        </p>
      </div>

      {/* Form panel */}
      <div className={styles.formPanel}>
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Criar conta</h1>
          <p className={styles.formSubtitle}>
            Preencha seus dados para começar
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="signup-email">
                E-mail
              </label>
              <input
                id="signup-email"
                type="email"
                className={styles.input}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="signup-password">
                Senha
              </label>
              <input
                id="signup-password"
                type="password"
                className={styles.input}
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Eu sou</label>
              <div className={styles.roleSelector}>
                <button
                  type="button"
                  className={`${styles.roleOption} ${
                    role === 'talent' ? styles.roleOptionActive : ''
                  }`}
                  onClick={() => setRole('talent')}
                >
                  <Video size={22} className={styles.roleOptionIcon} />
                  <span className={styles.roleOptionLabel}>Talento</span>
                </button>
                <button
                  type="button"
                  className={`${styles.roleOption} ${
                    role === 'company' ? styles.roleOptionActive : ''
                  }`}
                  onClick={() => setRole('company')}
                >
                  <Building2 size={22} className={styles.roleOptionIcon} />
                  <span className={styles.roleOptionLabel}>Empresa</span>
                </button>
              </div>
            </div>

            {role === 'company' && (
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="company-name">
                  Nome da empresa
                </label>
                <input
                  id="company-name"
                  type="text"
                  className={styles.input}
                  placeholder="Nome da sua empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  autoComplete="organization"
                />
              </div>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>ou</span>
            <div className={styles.dividerLine} />
          </div>

          <p className={styles.switchLink}>
            Já tem uma conta?{' '}
            <Link to="/login" className={styles.switchLinkAnchor}>
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
