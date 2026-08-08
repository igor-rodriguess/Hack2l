import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Video,
  UserCircle,
  Mail,
  Search,
  Columns3,
  GitBranch,
  Settings,
  PanelLeftClose,
} from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  role: 'talent' | 'company';
  collapsed: boolean;
  onToggleCollapse: () => void;
  userName?: string;
}

const talentNav = [
  { to: '/talent/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/talent/videos', label: 'Meus Vídeos', icon: Video },
  { to: '/talent/profile', label: 'Perfil', icon: UserCircle },
  { to: '/talent/invites', label: 'Convites', icon: Mail },
];

const companyNav = [
  { to: '/company/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/company/search', label: 'Nova Busca', icon: Search },
  { to: '/company/board', label: 'WHO Board', icon: Columns3 },
  { to: '/company/pipeline', label: 'Pipeline', icon: GitBranch },
  { to: '/company/settings', label: 'Configurações', icon: Settings },
];

export default function Sidebar({ role, collapsed, onToggleCollapse, userName }: SidebarProps) {
  const location = useLocation();
  const navItems = role === 'talent' ? talentNav : companyNav;
  const roleLabel = role === 'talent' ? 'Talento' : 'Empresa';

  const initials = userName
    ? userName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return (
    <aside
      className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ''}`}
      aria-label="Menu lateral"
    >
      <div className={styles.logoArea}>
        <div className={styles.logoMark}>W</div>
        <span className={styles.logoText}>WHO</span>
      </div>

      <nav className={styles.navSection}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to || location.pathname.startsWith(item.to + '/');
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <span className={styles.navIcon}>
                <Icon size={20} />
              </span>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.bottomSection}>
        <button
          className={styles.collapseButton}
          onClick={onToggleCollapse}
          title={collapsed ? 'Expandir menu' : 'Recolher menu'}
          aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
        >
          <PanelLeftClose
            size={20}
            className={`${styles.collapseIcon} ${collapsed ? styles.collapseIconFlipped : ''}`}
          />
          <span className={styles.collapseLabel}>Recolher</span>
        </button>

        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>{initials}</div>
          <div className={styles.userDetails}>
            <div className={styles.userName}>{userName || 'Usuário'}</div>
            <div className={styles.userRole}>{roleLabel}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
