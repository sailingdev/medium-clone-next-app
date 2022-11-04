import React, { Fragment } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoImage from "../../assets/image/logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBox from "../../components/_ui/SearchBox";

const navLinkItem = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Team",
    link: "/",
  },
  {
    label: "Blogs",
    link: "/",
  },
  {
    label: "Comments",
    link: "/",
  },
];

const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className={styles.wrapper}>
      {({ open }) => (
        <>
          <div className={styles.navbarDesktopWrapper}>
            <div className={styles.navbarWrapper}>
              <div className={styles.linkWrapper}>
                <div className={styles.imageWrapper}>
                  <Image className={styles.image} src={logoImage} alt="Your Company" />
                </div>
                <div className={styles.linkTitleWrapper}>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navLinkItem.map((navItem, index) => (
                    <a href={navItem.link} key={index} className={styles.titleWrapper}>
                      {navItem.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.searchWrapper}>
                <SearchBox />
              </div>
              <div className={styles.hamburger}>
                {/* Mobile menu button */}
                <Disclosure.Button className={styles.menuButton}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className={styles.buttonIcon} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={styles.buttonIcon} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={styles.toolWrapper}>
                <button type="button" className={styles.toolButtonWrapper}>
                  <span className="sr-only">View notifications</span>
                  <BellIcon className={styles.bellIcon} aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className={styles.menuIconWrapper}>
                  <div>
                    <Menu.Button className={styles.menuButtonWrapper}>
                      <span className="sr-only">Open user menu</span>
                      <Image
                        width={50}
                        height={50}
                        className={styles.profileImage}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={styles.menuItemWrapper}>
                      <Menu.Item>
                        <a href="#" className={styles.menuItem}>
                          Your Profile
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="#" className={styles.menuItem}>
                          Settings
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="#" className={styles.menuItem}>
                          Sign out
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className={styles.navbarMobileWrapper}>
            <div className={styles.linkWrapper}>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {navLinkItem.map((navItem, index) => (
                <Disclosure.Button
                  as="a"
                  href={navItem.link}
                  key={index}
                  className={styles.linkItem}
                >
                  {navItem.label}
                </Disclosure.Button>
              ))}
            </div>
            <div className={styles.profileWrapper}>
              <div className={styles.toolWrapper}>
                <div className={styles.imageWrapper}>
                  <Image
                    width={50}
                    height={50}
                    className={styles.image}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className={styles.textWrapper}>
                  <div className={styles.title}>Tom Cook</div>
                  <div className={styles.description}>tom@example.com</div>
                </div>
                <button type="button" className={styles.toolButton}>
                  <span className="sr-only">View notifications</span>
                  <BellIcon className={styles.bellIcon} aria-hidden="true" />
                </button>
              </div>
              <div className={styles.buttonWrapper}>
                <Disclosure.Button as="a" href="#" className={styles.button}>
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button as="a" href="#" className={styles.button}>
                  Settings
                </Disclosure.Button>
                <Disclosure.Button as="a" href="#" className={styles.button}>
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;