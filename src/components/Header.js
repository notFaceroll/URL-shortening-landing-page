export default function Header(props) {
  return (
    <header className="flex h-20 justify-between items-center max-w-screen-xl mx-auto p-4">
      <span className=" text-4xl font-semibold text-neutral-veryDarkViolet">Shortly</span>
      <nav className="hidden sm:flex">
        <ul className="flex mr-auto">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
      <button className="sm:hidden">Menu</button>
    </header>
  );
}
