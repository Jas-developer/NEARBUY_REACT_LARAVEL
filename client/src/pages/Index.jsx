import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Service } from "./Service";
import { Contact } from "./Contact";
import { NoPage } from "./NoPage";
import { RootLayout } from "./RootLayout";
import { Store } from "./Store";
import { Help } from "./Help";
import { Auth } from "./Auth";

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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
