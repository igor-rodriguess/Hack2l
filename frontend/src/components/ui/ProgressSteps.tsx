import { Check } from 'lucide-react';
import styles from './ProgressSteps.module.css';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number; // 1-indexed
}

export default function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div>
      <div className={styles.progress}>
        {steps.map((_, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isCompleted = stepNum < currentStep;

          return (
            <div key={index} className={styles.step}>
              <div
                className={`${styles.circle} ${isActive ? styles.active : ''} ${
                  isCompleted ? styles.completed : ''
                }`}
              >
                {isCompleted ? <Check size={16} /> : stepNum}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`${styles.line} ${isCompleted ? styles.completed : ''}`}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.labels}>
        {steps.map((label, index) => (
          <span
            key={index}
            className={`${styles.label} ${index + 1 === currentStep ? styles.active : ''}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
