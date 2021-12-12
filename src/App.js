import './App.css';
import {MonsterList, MonsterPage} from "./components";
import {BrowserRouter,Route,Routes, Link, Outlet} from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Menu />} >
              <Route index element={<p className="mt-5"><strong>Welcome to MONSTER app :)</strong></p>} />
              <Route path="/monsters" element={<MonsterList />} />
              <Route path="monsters/:monsterID" element={<MonsterPage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

const Menu = ()=>(

    <Container>
        <Nav className="mt-4">
            <Nav.Item>
                <Nav.Link href="/"><strong>Home</strong></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/monsters"><strong className="text-danger">Monsters</strong></Nav.Link>
            </Nav.Item>
            <Outlet/>
        </Nav>
    </Container>

);
export default App;
