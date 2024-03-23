import { Route, Routes } from "react-router";
import Home from "./component/page/Home";
import { memo } from "react";
import Menu from "./component/common/Menu";


function App() {
  return (
    <>
      <Brand />
      <Routes>
          <Route path="/home" Component={Home}/>
          <Route path="/menu" Component={Menu} />
          <Route path="/about" Component={A} />
          <Route path="/work" Component={<Work />} />
          <Route path="/team" Component={<Team />} />
          <Route path="/services" Component={<Services />} />
          <Route path="/followme" Component={<FollowMe />} />
          <Route path="/events" Component={<Events />} />
          <Route path="/contact" Component={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
