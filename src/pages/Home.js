import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link to = "/about">About</Link>
        <br></br>
        <Link to ="/itmes">Items</Link>
      </main>
    </>
  );
}

export default Home;
