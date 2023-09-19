/*  base code borrowed from
https://flowbite.com/docs/components/navbar/#sticky-navbar
 */

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '../../context/AuthContext'
import { FiMenu, FiMail, FiSettings, FiLogOut } from 'react-icons/fi'
import { MdOutlineDashboard } from 'react-icons/md'
import heart from '/heart.png'
import { useNavigate } from 'react-router-dom'

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav>
      <nav className="bg-blue-100 border-blue-100 shadow-lg  md:px-4 lg:px-8">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src={heart} className="h-8 mr-1" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-950">
              Health Ease
            </span>
          </a>

          <Menu as="div" className="relative inline-block text-left md:hidden">
            <div>
              <Menu.Button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-200  "
              >
                <FiMenu className="text-2xl text-blue-900" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-120"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-blue-200 rounded-md bg-blue-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => navigate('/staff-portal')}
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-blue-200 text-black font-semibold'
                            : 'text-blue-950',
                          ' px-4 py-2 text-sm flex items-center'
                        )}
                      >
                        <MdOutlineDashboard className="mr-1" /> Dashboard
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-blue-200 text-black font-semibold'
                            : 'text-blue-950',
                          'px-4 py-2 text-sm flex items-center'
                        )}
                      >
                        <FiMail className="mr-1" /> Messages
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-blue-200 text-black font-semibold'
                            : 'text-blue-950',
                          'px-4 py-2 text-sm flex items-center'
                        )}
                      >
                        <FiSettings className="mr-1" /> Settings
                      </a>
                    )}
                  </Menu.Item>
                </div>

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-blue-200 text-black font-semibold'
                            : 'text-blue-950',
                          'px-4 py-2 text-sm flex items-center'
                        )}
                      >
                        <FiLogOut className="mr-1" /> Log out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-2 lg:space-x-10 md:mt-0 md:border-0 ">
              <li
                onClick={() => navigate('/staff-portal')}
                className="bg-blue-500 rounded-full shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-md w-32  cursor-pointer mx-5 hover:bg-blue-600"
              >
                <MdOutlineDashboard className="text-l" />
                <h2 className=" my-1 mx-2 font-medium ">Dashboard</h2>
              </li>

              <li
                onClick={() => console.log('hello')}
                className="bg-blue-500 p-1 px-2 rounded-full shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-md w-32  cursor-pointer mx-5 hover:bg-blue-600"
              >
                <FiMail className="text-l" />
                <h2 className=" my-1 mx-2 font-medium ">Messages</h2>
              </li>
              <li
                onClick={() => console.log('hello')}
                className="bg-blue-500 p-1 px-2 rounded-full shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-md w-28  cursor-pointer mx-5 hover:bg-blue-600"
              >
                <FiSettings className="text-l" />
                <h2 className=" my-1 mx-2 font-medium ">Settings</h2>
              </li>
              <li
                onClick={handleLogout}
                className="bg-blue-500 p-1 px-2 rounded-full shadow-md shadow-blue-800 flex flex-row items-center justify-center text-white text-md w-28  cursor-pointer mx-5 hover:bg-blue-600"
              >
                <FiLogOut className="text-l" />
                <h2 className=" my-1 mx-2 font-medium ">Log Out</h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  )
}

export default NavBar
