function Footer(props) {
  return (
    <div className={"w-full flex flex-col items-center pb-[4vh] " + props.className}>
      <h3 className="uppercase text-[1.5rem] font-[500]">&copy; 2024 All Rights Reserved</h3>
      <p className="uppercase">designed by Mohammad azizh</p>
    </div>
  );
}

export default Footer;
