export default function AppLayout({ children }) {
  return (
    <>
      <div id="baseContent">
        <header id="barraNavegação">
          <a href="">Home</a>
          <a href="">Users</a>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}
