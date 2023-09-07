import style from "./container.module.css";

interface Props {
  children: React.ReactNode
};
const Container = ({children}: Props) => {
  return (
    <section className={style.containerCss}>
     {children} 
    </section>
  )
}

export default Container;
