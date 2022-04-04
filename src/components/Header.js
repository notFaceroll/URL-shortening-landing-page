export default function Header(props) {
  return (
    <header className="flex items-center justify-between h-20 max-w-screen-lg p-8 mx-auto sm:gap-8">
      <span className="text-4xl font-semibold text-neutral-veryDarkViolet">
        Shortly
      </span>
      <nav className="items-center hidden sm:flex sm:flex-1">
        <ul className="flex gap-6 mr-auto text-neutral-grayishViolet">
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
        </ul>
        <div>
          <button className="text-neutral-grayishViolet">Login</button>
          <button className="px-6 py-2 ml-8 text-sm font-normal text-white rounded-full bg-primary-cyan">
            Sign Up
          </button>
        </div>
      </nav>
      <button className="sm:hidden">Menu</button>
    </header>
  );
}
