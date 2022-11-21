import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import NavLink from "../../components/_ui/NavLink";
import SearchBox from "../../components/_ui/SearchBox";
import avatar from "../../assets/image/person.png";
import logoImage from "../../assets/image/logo.png";
import styles from "./styles.module.scss";
import { authSelector, logout } from "../../store/Auth";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

const navLinkItem = [
  {
    label: "About Us",
    link: "/about-us",
  },
];

const navLinkShowItem = [
  {
    label: "Create Blog",
    link: "/create-blog",
  },
];

const Header: React.FC = () => {
  const { userData } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  return (
    <Disclosure as="nav" className={styles.wrapper}>
      {({ open }) => (
        <>
          <div className={styles.navbarDesktopWrapper}>
            <div className={styles.navbarWrapper}>
              <div className={styles.linkWrapper}>
                <Link href="/" className={styles.imageWrapper}>
                  <Image className={styles.image} src={logoImage} alt="Your Company" />
                </Link>
                <div className={styles.linkItems}>
                  {navLinkItem.map((navItem, index) => (
                    <NavLink
                      href={navItem.link}
                      key={index}
                      className={styles.link}
                      activeClassName={styles.active}
                    >
                      {navItem.label}
                    </NavLink>
                  ))}
                  {userData &&
                    navLinkShowItem.map((navItem, index) => (
                      <NavLink
                        href={navItem.link}
                        key={index}
                        className={styles.link}
                        activeClassName={styles.active}
                      >
                        {navItem.label}
                      </NavLink>
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
              {userData ? (
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
                          src={avatar}
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
                          <Link href="user/profile" className={styles.menuItem}>
                            Your Profile
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            role="button"
                            onClick={() => {
                              const refreshToken = localStorage.getItem("refreshToken");
                              dispatch(logout(refreshToken ?? ""));
                            }}
                            className={styles.menuItem}
                          >
                            Logout
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link href="/auth/login" className={styles.loginButton}>
                  Log In
                </Link>
              )}
            </div>
          </div>

          <Disclosure.Panel className={styles.navbarMobileWrapper}>
            <div className={styles.linkWrapper}>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {navLinkItem.map((navItem, index) => (
                <NavLink
                  href={navItem.link}
                  key={index}
                  className={styles.linkItem}
                  activeClassName={styles.active}
                >
                  <Disclosure.Button as="div">{navItem.label}</Disclosure.Button>
                </NavLink>
              ))}
              {userData &&
                navLinkShowItem.map((navItem, index) => (
                  <NavLink
                    href={navItem.link}
                    key={index}
                    className={styles.linkItem}
                    activeClassName={styles.active}
                  >
                    <Disclosure.Button as="div">{navItem.label}</Disclosure.Button>
                  </NavLink>
                ))}
            </div>
            {userData ? (
              <div className={styles.profileWrapper}>
                <div className={styles.toolWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      width={50}
                      height={50}
                      className={styles.image}
                      src={avatar}
                      alt=""
                    />
                  </div>
                  <div className={styles.textWrapper}>
                    <div className={styles.title}>Denis</div>
                    <div className={styles.description}>tom@example.com</div>
                  </div>
                  <button type="button" className={styles.toolButton}>
                    <span className="sr-only">View notifications</span>
                    <BellIcon className={styles.bellIcon} aria-hidden="true" />
                  </button>
                </div>
                <div className={styles.buttonWrapper}>
                  <Link href="user/profile">
                    <Disclosure.Button as="div" className={styles.button}>
                      Your Profile
                    </Disclosure.Button>
                  </Link>
                  <Disclosure.Button as="div" className={styles.button}>
                    <div
                      role="button"
                      onClick={() => {
                        const refreshToken = localStorage.getItem("refreshToken");
                        dispatch(logout(refreshToken ?? ""));
                      }}
                    >
                      Logout
                    </div>
                  </Disclosure.Button>
                </div>
              </div>
            ) : (
              <div className={styles.profileWrapper}>
                <div className={styles.buttonWrapper}>
                  <Link href="/auth/login" className={styles.loginButton}>
                    <Disclosure.Button as="div" className={styles.button}>
                      Log In
                    </Disclosure.Button>
                  </Link>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
