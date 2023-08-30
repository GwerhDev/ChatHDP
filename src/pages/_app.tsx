import '../styles/root.css';
import '../styles/globals.css';

import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

export default function App() {
  return (
    <div className='App'>
      <SideBar/>
      <Chat/>
    </div>
  )
}
