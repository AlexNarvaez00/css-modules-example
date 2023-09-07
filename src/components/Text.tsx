import style from "./text.module.css";

interface Props {
  children: React.ReactNode
};

export default function Text({children}: Props) {
  return (
    <p className={style.textCss}>{children}</p>
  )
}
