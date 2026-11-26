import styles from "./BotaoLink.module.css";

export function BotaoLink({
  href,
  variante = "primario",
  externo = false,
  children,
}) {
  const classes = [styles.botao, styles[variante], externo ? styles.externo : ""]
    .filter(Boolean)
    .join(" ");
  const propsExternos = externo
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a className={classes} href={href} {...propsExternos}>
      {children}
      {externo && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
