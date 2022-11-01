import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import Dashboard from "./views/Dashboard";
import TicketMarket from "./views/TicketMarket";
import Account from "./views/Account";
import MyTickets from "./views/MyTickets";
import NoPage from "./views/NoPage";
import Container from 'react-bootstrap/Container';
import PrivateOutlet from "./utils/PrivateOutlet";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
            <Container fluid="xxl">
        <AuthProvider>
          <Navbar />
                        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="" element={<Dashboard />} />
          <Route path="second_market" element={<TicketMarket />} />
          <Route path="account" element={<Account />} />
          <Route path="mytickets" element={<MyTickets />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
        </AuthProvider>

        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

