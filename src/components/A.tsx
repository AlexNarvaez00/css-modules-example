import style from "./a.module.css";

interface Props {
  children: React.ReactNode,
  href: string
};
const A = ({children, href  }: Props) => {
  return (
    <a className={style.aCss} href={href}>
      {children}
    </a>
  )
}
export default A;
