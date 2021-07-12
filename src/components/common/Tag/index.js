import style from './style.module.scss';

export default function Tag({ text = '', className = ''}) {
  return (
    <div className={`${style.container} ${className}`}>
      {text}
    </div>
  )
}