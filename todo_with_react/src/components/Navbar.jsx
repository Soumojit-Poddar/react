
function Navbar() {
  return (
    <nav className="flex justify-between bg-[#FF7D9D] text-[#232528] py-2">
      <div className="logo font-extrabold text-xl mx-9">TaskHub</div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
