"use client";

import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col bg-transparent overflow-hidden w-full">
      <main className="flex-grow ">{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
