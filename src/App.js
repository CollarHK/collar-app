import './App.scss';
import Notification from './component/Notification.js';
import Home from './page/Home.js';
import Member from './page/Member.js';
import Footer from './component/Footer.js';
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  const message = ""
  return (
    <div className="App">
      {message && <Notification text={message}></Notification> }
      <HashRouter basename="/">
        <Routes>
          <Route path="/:member" element={<Member />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
