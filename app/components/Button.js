export default function Button({ href, label, style, target }) {
  return (
    <a href={href} className={style} target={target}>
      {label}
    </a>
  );
}
