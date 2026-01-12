import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
