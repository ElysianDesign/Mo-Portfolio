import Link from "next/link";

function Navbar(props) {
  return (
    <div className={"sticky top-[2vh] text-2xl font-[400] z-20 " + props.className}>
      <div className="flex flex-row justify-between">
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#aboutIntro">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <ul>
          <li className="font-[600]">
            <Link href="/">M. Azizh</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
