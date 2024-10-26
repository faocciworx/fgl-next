import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, closeMenu, navItems }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={closeMenu}
    >
      <div
        className="w-64 dark:bg-[#f2ede6] bg-[#202020] p-4 h-full"
        onClick={(e) => e.stopPropagation()}
        style={{ right: 0 }}
      >
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 cursor-pointer">
              <span className="self-center hover:text-primary text-2xl font-semibold whitespace-nowrap text-primary">
                <button href="/">FGOL</button>
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="dark:text-gray-800 text-white hover:text-gray-700 dark:hover:text-primary focus:outline-none"
            onClick={closeMenu}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <ul className="space-y-2 mt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} passHref>
                <div
                  className={`flex items-center space-x-2 py-2 px-3 rounded cursor-pointer ${
                    item.href === pathname
                      ? "dark:text-gray-800 text-white bg-primary"
                      : "dark:text-gray-800 text-white hover:bg-gray-100 dark:hover:bg-primary"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
