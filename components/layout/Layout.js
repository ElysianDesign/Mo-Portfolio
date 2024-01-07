import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from "next/font/google";

const title = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const text = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

function Layout(props) {
  return (
    <div
      className={
        "min-h-[100vh] bg-[#f2f2f2] text-black px-[1.5vw] " + title.className
      }
    >
      <main className="">{props.children}</main>
    </div>
  );
}

export default Layout;
