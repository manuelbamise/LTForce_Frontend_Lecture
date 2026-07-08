const NavBar = () => {
  const navItems = ["Home", "About", "Profile"];

  const userObject = [
    { name: "hsgdhs", age: 233, department: "jhdfjdjfjadhfj" },
    { name: "hsgdhs", age: 233, department: "jhdfjdjfjadhfj" },
  ];

  return (
    <nav className=" w-full flex flex-row item-center justify-center mt-4">
      <ul className="flex flex-row items-center justify-between p-6 w-[50%]  bg-gray-200 rounded-md">
        {navItems &&
          navItems.map((item, index) => (
            <li
              key={index}
              className="p-4 rounded hover:bg-gray-400 hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;
