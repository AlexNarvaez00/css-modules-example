import style from "./h1.module.css";

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  return <h1 className={style.h1Css}>{children}</h1>;
};

export default H1;
