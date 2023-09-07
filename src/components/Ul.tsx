import style from "./ul.module.css";

interface Props {
  children: React.ReactNode
};

const Ul = ({children}: Props) => {
  return (
    <ul className={style.ulCss}>
      {children}
    </ul>
  )
}

export default Ul;
