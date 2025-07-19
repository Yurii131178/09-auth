import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.wrap}>
      <p className={css.text}>There was some error. Sorry...</p>
    </div>
  );
}
