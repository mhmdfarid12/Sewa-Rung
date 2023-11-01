import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Table from "./components/pages/Table";
import TableOrders from "./components/pages/TableOrders";
import TableCustomers from "./components/pages/TableCustomers";
import Reportsewa from "./components/pages/ReportSewa";
import Home2 from "./components/pages/Home2";
import Edit from "./components/pages/Edit";
import Add from "./components/pages/Add";
import AddOrders from "./components/pages/AddOrders";
import EditOrders from "./components/pages/EditOrders";
import EditCustomers from "./components/pages/EditCustomers";
import AddCustomers from "./components/pages/AddCustomer";
import EditReportSewa from "./components/pages/EditReportSewa";
import AddReportSewa from "./components/pages/AddReportSewa";

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
          <Route path="/edit" element={<Edit />} />
          <Route path="/add" element={<Add />} />
          <Route path="/add orders" element={<AddOrders />} />
          <Route path="/edit orders" element={<EditOrders />} />
          <Route path="/edit customers" element={<EditCustomers />} />
          <Route path="/add customers" element={<AddCustomers />} />
          <Route path="/edit report sewa" element={<EditReportSewa />} />
          <Route path="/add ReportSewa" element={<AddReportSewa />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
