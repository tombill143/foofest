import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <h1>Band List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/bands">
        <a>Band Listings</a>
      </Link>
    </nav>
  );
};

export default Navbar;
