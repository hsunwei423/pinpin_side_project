import style from './style.module.scss';

export default function Button({
  text = '', 
  size = 'medium',
  type = 'primary',
  onClick
}) {
  return (
    <button
      className={`${style.container} ${style[size] || ''} ${type === 'simple' && style.simple}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};