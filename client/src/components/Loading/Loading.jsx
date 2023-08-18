import styled from "./loading.module.css";

function Loading() {
  return (
    <div className={styled.page}>
      <div className={styled.container}>
        <div className={styled.ring}></div>
        <div className={styled.ring}></div>
        <div className={styled.ring}></div>
        <div className={styled.ring}></div>
        <div className={styled.h3}>loading</div>
      </div>
    </div>
  );
}

export default Loading;
