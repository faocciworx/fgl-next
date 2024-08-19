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
        className="w-64 bg-[#202020] p-4 h-full"
        onClick={(e) => e.stopPropagation()}
        style={{ right: 0 }}
      >
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 cursor-pointer">
              <span className="self-center hover:text-primary text-2xl font-semibold whitespace-nowrap dark:text-white">
                <button href="/">FGOL</button>
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
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
                      ? "text-white bg-primary"
                      : "text-white hover:bg-gray-100 dark:hover:bg-primary dark:text-white"
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
