import './App.css';
import {MonsterList, MonsterPage} from "./components";
import {BrowserRouter,Route,Routes, Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Menu />} >
              <Route index element={<div>Welcome to MONSTER app :)</div>} />
              <Route path="/monsters" element={<MonsterList />} />
              <Route path="monsters/:monsterID" element={<MonsterPage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

const Menu = ()=>(
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/monsters">Monsters</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
);
export default App;
