import styles from './styles.module.scss';

export default function Section({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}