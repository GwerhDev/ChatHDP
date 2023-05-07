import s from '../css/Chat.module.css'
import ChatBox from './ChatBox';
import Input from './Input';

export default function Chat() {
  return (
    <div className={s.chatCont}>
      <ChatBox/>
      <Input/>
    </div>
  );
}