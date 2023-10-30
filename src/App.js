import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Table from "./components/pages/Table";
import TableOrders from "./components/pages/TableOrders";
import TableCustomers from "./components/pages/TableCustomers";
import Reportsewa from "./components/pages/ReportSewa";
import Home2 from "./components/pages/Home2";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tabel" element={<Table />} />
          <Route path="/tabel orders" element={<TableOrders />} />
          <Route path="/tabel customers" element={<TableCustomers />} />
          <Route path="/report sewa" element={<Reportsewa />} />
          <Route path="/home" element={<Home2 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
