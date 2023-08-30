import s from './ChatBox.module.css'

export default function ChatBox() {
  return (
    <div className={s.chatBoxCont}>
      <h1 className={s.title}>ChatHDP</h1>
      <h6 className={s.subtitle}>La Negligencia Artificial</h6>
    </div>
  );
}