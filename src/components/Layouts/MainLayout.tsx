import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
