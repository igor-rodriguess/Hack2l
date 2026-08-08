import React from 'react';
import styles from './SkillTag.module.css';

interface SkillTagProps {
  name: string;
  level?: 'iniciante' | 'intermediário' | 'avançado' | 'especialista';
  verified?: boolean;
  size?: 'sm' | 'md' | 'lg';
  removable?: boolean;
  onRemove?: () => void;
}

const levelColors: Record<string, string> = {
  iniciante: '#D4A843',
  intermediário: '#4A6741',
  avançado: '#2D6A4F',
  especialista: '#2D4A3E',
};

export default function SkillTag({ name, level, verified, size = 'md', removable, onRemove }: SkillTagProps) {
  return (
    <span
      className={`${styles.tag} ${styles[size]}`}
      style={level ? { borderLeftColor: levelColors[level] } : undefined}
    >
      <span className={styles.name}>{name}</span>
      {level && <span className={styles.level}>{level}</span>}
      {verified && <span className={styles.verified} title="Verificado">✓</span>}
      {removable && (
        <button className={styles.remove} onClick={onRemove} aria-label="Remover">
          ×
        </button>
      )}
    </span>
  );
}
