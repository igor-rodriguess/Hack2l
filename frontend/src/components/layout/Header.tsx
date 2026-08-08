import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Settings, LogOut } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  role?: 'talent' | 'company' | null;
  userName?: string;
  onMenuToggle?: () => void;
  menuOpen?: boolean;
}

const talentLinks = [
  { to: '/talent/dashboard', label: 'Dashboard' },
  { to: '/talent/videos', label: 'Meus Vídeos' },
  { to: '/talent/profile', label: 'Perfil' },
  { to: '/talent/invites', label: 'Convites' },
];

const companyLinks = [
  { to: '/company/dashboard', label: 'Dashboard' },
  { to: '/company/search', label: 'Nova Busca' },
  { to: '/company/board', label: 'WHO Board' },
  { to: '/company/pipeline', label: 'Pipeline' },
];

const publicLinks = [
  { to: '/', label: 'Início' },
  { to: '/login', label: 'Entrar' },
  { to: '/signup', label: 'Criar Conta' },
];

export default function Header({ role, userName, onMenuToggle, menuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = role === 'talent' ? talentLinks : role === 'company' ? companyLinks : publicLinks;
  const initials = userName
    ? userName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <Link to="/" className={styles.logoSection}>
        <div className={styles.logoMark}>W</div>
        <span className={styles.logoText}>WHO</span>
      </Link>

      <nav className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`${styles.navLink} ${
              location.pathname === link.to ? styles.navLinkActive : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        {role && (
          <div ref={menuRef} style={{ position: 'relative' }}>
            <button
              className={styles.avatarButton}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="Menu do usuário"
            >
              {initials}
            </button>
            <div
              className={`${styles.userMenu} ${userMenuOpen ? styles.userMenuOpen : ''}`}
            >
              <Link to={`/${role}/profile`} className={styles.menuItem} onClick={() => setUserMenuOpen(false)}>
                <User className={styles.menuItemIcon} />
                Meu Perfil
              </Link>
              <Link to={`/${role}/settings`} className={styles.menuItem} onClick={() => setUserMenuOpen(false)}>
                <Settings className={styles.menuItemIcon} />
                Configurações
              </Link>
              <div className={styles.menuDivider} />
              <Link
                to="/"
                className={`${styles.menuItem} ${styles.menuItemDanger}`}
                onClick={() => setUserMenuOpen(false)}
              >
                <LogOut className={styles.menuItemIcon} />
                Sair
              </Link>
            </div>
          </div>
        )}
        <button
          className={styles.hamburger}
          onClick={onMenuToggle}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
