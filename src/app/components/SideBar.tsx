import { CloseSideBar } from './Buttons/CloseSideBar';
import { NewChat } from './Buttons/NewChat';
import s from './SideBar.module.css'

export default function SideBar() {
  return (
    <main className={s.sideBarCont}>
      <div className={s.newChatButtonContainer}>
        <NewChat/>
        <CloseSideBar/>
      </div>
    </main>
  );
}