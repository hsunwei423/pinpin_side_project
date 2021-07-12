import style from './style.module.scss';

export default function Tag({ text = '' }) {
  return (
    <div className={style.container}>
      {text}
    </div>
  )
}