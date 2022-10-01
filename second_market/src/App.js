import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Account from './components/Account';
import MyTickets from './components/MyTickets';
import Dashboard from './components/Dashboard'
import Container from 'react-bootstrap/Container';
import NoPage from './components/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    
            <Container fluid="xxl">
    
        <BrowserRouter>
          <Routes>
              <Route index element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="mytickets" element={<MyTickets />} />
              <Route path="account" element={<Account />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
    </BrowserRouter>
         </Container>


  );
}

export default App;
