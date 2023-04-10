import { FC, useEffect, useState } from 'react'

interface IMenuItem {
  to: string;
  title: string;
  icon: string;
}

// const srcPreffix = "../../public/";
const srcPreffix = '/'

export const Menu: FC = () => {
  const cacheKey = 'menu-collapse'
  const [collapsed, setCollapsed] = useState(true)
  const [pathname, setPathname] = useState('')

  const menuItems: IMenuItem[] = [
    {
      to: '/qr-login',
      title: 'QR Login',
      icon: 'qr-code.png'
    }
  ]

  const paragraphStyle = `${
    collapsed ? 'w-0 opacity-0' : 'w-full opacity-100'
  } transition-all duration-300 overflow-clip`

  const handleCollapse = () => {
    setCollapsed((prev) => {
      localStorage.setItem(cacheKey, JSON.stringify(!prev))

      return !prev
    })
  }

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  useEffect(() => {
    const cachedValue = localStorage.getItem(cacheKey)

    if (!cachedValue) return

    setCollapsed(JSON.parse(cachedValue))
  }, [])

  return (
    <nav>
      <ul
        className={`z-50 max-h-full ${
          collapsed ? 'w-20' : 'w-72'
        } flex flex-col ml-4 mr-8 my-4 top-4 sticky h-fit card transition-all duration-300 select-none`}
      >
        <li
          className={`flex h-12 hover:bg-hover transition-all items-center hover:rounded-3xl duration-300 cursor-pointer ${
            collapsed ? 'w-12' : 'w-full'
          }`}
          onClick={handleCollapse}
        >
          <img src={srcPreffix + 'menu.png'} alt="Menu burger" className={'h-6 w-6 mx-3'} />
          <p className={paragraphStyle}>Zavrieť</p>
        </li>
        {menuItems.map(({ title, icon, to }) => (
          <li key={title}>
            <a
              className={`flex h-12 hover:bg-hover transition-all items-center hover:rounded-3xl duration-300 ${
                collapsed ? 'w-12' : 'w-full'
              } ${pathname?.includes(to) ? 'bg-gray-100 rounded-xl' : ''}`}
              href={to}
            >
              <img src={srcPreffix + icon} alt={icon} className={'h-6 w-6 mx-3'} />
              <p className={paragraphStyle}>{title}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
