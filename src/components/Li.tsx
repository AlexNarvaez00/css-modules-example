import style from "./li.module.css";

interface Props {
  children : React.ReactNode
}

export default function Li({children}: Props ) {
  return (
    <li className={style.liCss} >{children}</li>
  )
}
