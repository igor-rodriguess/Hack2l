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
  type LucideIcon,
} from 'lucide-react';
import styles from './MobileNavigation.module.css';

interface MobileNavigationProps {
  role: 'talent' | 'company';
  notifications?: Record<string, number>;
}

interface TabItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const talentTabs: TabItem[] = [
  { to: '/talent/dashboard', label: 'Início', icon: LayoutDashboard },
  { to: '/talent/videos', label: 'Vídeos', icon: Video },
  { to: '/talent/profile', label: 'Perfil', icon: UserCircle },
  { to: '/talent/invites', label: 'Convites', icon: Mail },
];

const companyTabs: TabItem[] = [
  { to: '/company/dashboard', label: 'Início', icon: LayoutDashboard },
  { to: '/company/search', label: 'Buscar', icon: Search },
  { to: '/company/board', label: 'Board', icon: Columns3 },
  { to: '/company/pipeline', label: 'Pipeline', icon: GitBranch },
  { to: '/company/settings', label: 'Config', icon: Settings },
];

export default function MobileNavigation({ role, notifications = {} }: MobileNavigationProps) {
  const location = useLocation();
  const tabs = role === 'talent' ? talentTabs : companyTabs;

  return (
    <nav className={styles.mobileNav} aria-label="Navegação mobile">
      <div className={styles.tabs}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.to || location.pathname.startsWith(tab.to + '/');
          const badgeCount = notifications[tab.to] || 0;

          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
            >
              <span className={styles.tabIcon}>
                <Icon size={22} />
                {badgeCount > 0 && (
                  <span className={styles.badge}>{badgeCount > 99 ? '99+' : badgeCount}</span>
                )}
              </span>
              {isActive && <span className={styles.activeIndicator} />}
              <span className={styles.tabLabel}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
