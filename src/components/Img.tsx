import style from "./img.module.css";

interface Props {
  url: string;
}

export default function Img({ url }: Props) {
  return (
    <figure className={style.figureCss}>
      <img src={url} alt="image" className={style.imgCss} />
    </figure>
  );
}
