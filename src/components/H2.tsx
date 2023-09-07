import style from "./h2.module.css";

interface Props {
  children: React.ReactNode
}

const H2 = ({children}: Props) => {
  return (
    <h2 className={style.h2Css}>
      {children}
    </h2>
  )
}

export default H2;
