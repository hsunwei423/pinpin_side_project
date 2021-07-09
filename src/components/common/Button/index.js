import style from './style.module.scss';

export default function Button({ text = '', size = 'medium', onClick }) {
  return (
    <button
      className={`${style.container} ${style[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};