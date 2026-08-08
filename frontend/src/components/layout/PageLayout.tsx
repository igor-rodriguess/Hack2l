import React from 'react';
import type { ReactNode } from 'react';
import styles from './PageLayout.module.css';
import { useAppStore } from '../../store/appStore';
import {
  Home,
  Video,
  Mail,
  User,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  Building2,
  BarChart3,
  Users,
  Search,
} from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
  role?: 'talent' | 'company' | 'admin';
  title?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
  fullWidth?: boolean;
}

const talentNavItems = [
  { path: '/talent/dashboard', label: 'Início', icon: Home },
  { path: '/talent/videos', label: 'Vídeos', icon: Video },
  { path: '/talent/invites', label: 'Convites', icon: Mail },
  { path: '/talent/profile', label: 'Perfil', icon: User },
];

const companyNavItems = [
  { path: '/company/dashboard', label: 'Início', icon: Home },
  { path: '/company/search', label: 'Buscar', icon: Search },
  { path: '/company/candidates', label: 'Candidatos', icon: Users },
  { path: '/company/analytics', label: 'Análises', icon: BarChart3 },
];

export default function PageLayout({
  children,
  role = 'talent',
  title,
  showHeader = true,
  showSidebar = true,
  fullWidth = false,
}: PageLayoutProps) {
  const { sidebarOpen, setSidebarOpen, toggleSidebar, notifications } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = role === 'talent' ? talentNavItems : companyNavItems;

  return (
    <div className={styles.layout}>
      {/* Mobile Header */}
      {showHeader && (
        <header className={styles.header}>
          <button className={styles.menuBtn} onClick={toggleSidebar} aria-label="Menu">
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to={`/${role}/dashboard`} className={styles.logo}>
            <span className={styles.logoW}>W</span>
            <span className={styles.logoH}>H</span>
            <span className={styles.logoO}>O</span>
          </Link>
          <div className={styles.headerActions}>
            <button className={styles.notifBtn} aria-label="Notificações">
              <Bell size={20} />
              {notifications > 0 && <span className={styles.badge}>{notifications}</span>}
            </button>
          </div>
        </header>
      )}

      <div className={styles.body}>
        {/* Sidebar */}
        {showSidebar && (
          <>
            <div
              className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ''}`}
              onClick={() => setSidebarOpen(false)}
            />
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
              <div className={styles.sidebarLogo}>
                <span className={styles.logoW}>W</span>
                <span className={styles.logoH}>H</span>
                <span className={styles.logoO}>O</span>
                <span className={styles.logoSub}>Platform</span>
              </div>
              <nav className={styles.nav}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      className={`${styles.navItem} ${isActive ? styles.navActive : ''}`}
                      onClick={() => {
                        navigate(item.path);
                        setSidebarOpen(false);
                      }}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
              <div className={styles.sidebarFooter}>
                <button className={styles.navItem}>
                  <Settings size={20} />
                  <span>Configurações</span>
                </button>
                <button className={styles.navItem}>
                  <LogOut size={20} />
                  <span>Sair</span>
                </button>
              </div>
            </aside>
          </>
        )}

        {/* Main Content */}
        <main className={`${styles.main} ${fullWidth ? styles.mainFull : ''}`}>
          {title && (
            <div className={styles.pageTitle}>
              <h1>{title}</h1>
            </div>
          )}
          <div className={styles.content}>{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      {showSidebar && (
        <nav className={styles.bottomNav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                className={`${styles.bottomNavItem} ${isActive ? styles.bottomNavActive : ''}`}
                onClick={() => navigate(item.path)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
