import { Route, Routes } from "react-router";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import Customers from './pages/Customers' 
import AddCustomer from "./pages/AddCustomer";

function App() {
  return (
    <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route element={<ProtectedLayout />} >
      <Route path="/dashboard" element={<Dashboard /> } />
      <Route path="/customers" element={<Customers /> } />
      <Route path="/addcustomer" element={<AddCustomer />}/>
     
    </Route>
  </Routes>
  );
}

export default App;
