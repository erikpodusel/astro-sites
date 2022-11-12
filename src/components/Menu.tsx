import { FC, ReactNode, useEffect, useState } from "react";

interface IMenuItem {
  to: string;
  title: string;
  icon: ReactNode;
}

export const Menu: FC = () => {
  const cacheKey = "menu-collapse";
  const [collapsed, setCollapsed] = useState(true);

  const menuItems: IMenuItem[] = [
    {
      to: "/products",
      title: "Produkty",
      icon: <img src="shoe-sneaker.png" alt="Products icon" className={"h-6 w-6 mx-3"} />,
    },
    {
      to: "/categories",
      title: "Kategórie",
      icon: <img src="folder.png" alt="Categories icon" className={"h-6 w-6 mx-3"} />,
    },
    {
      to: "/sub-categories",
      title: "Podkategórie",
      icon: <img src="folder-multiple.png" alt="Subcategories icon" className={"h-6 w-6 mx-3"} />,
    },
  ];

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    const cachedValue = localStorage.getItem(cacheKey);

    if (!cachedValue) return;

    setCollapsed(JSON.parse(cachedValue));
  }, []);

  useEffect(() => {
    localStorage.setItem(cacheKey, JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <section
      className={`z-50 max-h-screen ${
        collapsed ? "w-20" : "w-72"
      } flex flex-col m-4 card transition-all duration-300 select-none`}
    >
      <span
        className={`flex h-12 hover:bg-gray-100 transition-all items-center rounded-xl duration-300 cursor-pointer ${
          collapsed ? "w-12" : "w-full"
        }`}
        onClick={handleCollapse}
      >
        <img src="menu.png" alt="Menu burger" className={"h-6 w-6 mx-3"} />
        <p className={`${collapsed ? "w-0" : "w-full"} transition-all duration-300 overflow-clip`}>
          Zavrieť
        </p>
      </span>
      {menuItems.map(({ title, icon, to }) => (
        <a
          className={`flex h-12 hover:bg-gray-100 transition-all items-center rounded-xl duration-300 ${
            collapsed ? "w-12" : "w-full"
          }`}
          href={to}
          key={title}
        >
          {icon}
          <p
            className={`${collapsed ? "w-0" : "w-full"} transition-all duration-300 overflow-clip`}
          >
            {title}
          </p>
        </a>
      ))}
    </section>
  );
};
