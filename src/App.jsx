import { RiMessage3Fill } from "react-icons/ri";

import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <main className="main">
      <Header />
      <Main />
      <button id="bp-toggle-chat" className="chat-btn">
        <RiMessage3Fill className="icon" />
      </button>
    </main>
  );
}

export default App;
