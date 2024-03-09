import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Components";
import Registration from "./Components/Registration";
import Login from "./Components/login";
import { Dashboard } from "./Components/Dashboard";
import { ProductManagement } from "./Components/Product";
import { OrdersManagement } from "./Components/OrderManagement";
import Forgotpassword from "./Components/Forgotpassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductManagement />} />
        <Route path="/order" element={<OrdersManagement />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
