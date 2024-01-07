import style from "./HorizontalLines.module.css";

const HorizontalLines = () => {
  return (
    <div className={style.lines}>
      <div className={style.line_1}></div>
      <div className={style.line_2}></div>
      <div className={style.line_3}></div>
    </div>
  )
};

export { HorizontalLines };
