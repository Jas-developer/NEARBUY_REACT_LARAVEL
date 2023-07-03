import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Service } from "./Service";
import { Contact } from "./Contact";
import { NoPage } from "./NoPage";
import { RootLayout } from "./RootLayout";
import { Store } from "./Store";
import { Help } from "./Help";
import { Auth } from "./Auth";

import { AdminLayout } from "./admin/AdminLayout";
import { Dashboard } from "./admin/Dashboard";
import { Transactions } from "./admin/Transactions";
import { Users } from "./admin/Users";
import { Products } from "./admin/Products";
import { Stores } from "./admin/Stores";
import { Inbox } from "./admin/Inbox";
import { Visitors } from "./admin/Visitors";
import { Profile } from "./admin/Profile";
import { Settings } from "./admin/Settings";
import { Guide } from "./admin/Guide";


export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/service" element={<Service />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Auth />} />

          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/inbox" element={<Inbox/>} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="/admin/users" element={<Users/>} />
            <Route path="/admin/products" element={<Products/>} />
            <Route path="/admin/stores" element={<Stores/>} />
            <Route path="/admin/visitors" element={<Visitors/>} />

            <Route path="/admin/profile" element={<Profile/>} />
            <Route path="/admin/settings" element={<Settings/>} />
            <Route path="/admin/guide" element={<Guide/>} />
            
          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
