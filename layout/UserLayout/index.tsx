import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageMeta from "../PageMeta";
import styles from "./styles.module.scss";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import NavLink from "../../components/_ui/NavLink";

const subNavigation = [
  { name: "Profile", href: "/user/profile", icon: UserCircleIcon },
  { name: "Account", href: "/user/account", icon: CogIcon },
  { name: "Password", href: "/user/password", icon: KeyIcon },
  { name: "Notifications", href: "/userNotification", icon: BellIcon },
  { name: "Billing", href: "user/billing", icon: CreditCardIcon },
  { name: "Integrations", href: "user/integration", icon: SquaresPlusIcon },
];

type PageMetaProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
};

const UserLayout: React.FC<PageMetaProps> = ({
  children,
  description = "",
  keywords = "",
  title = "",
  url = "",
}) => {
  return (
    <div className={styles.wrapper}>
      <PageMeta title={title} description={description} keywords={keywords} url={url} />
      <Header />
      <div className={styles.mainWrapper}>
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <div className={styles.textWrapper}>
              <h1 className={styles.text}>Setting</h1>
            </div>
          </header>
        </div>

        <main className={styles.main}>
          <div className={styles.panelWrapper}>
            <div className={styles.divide}>
              <aside className={styles.asideWrapper}>
                <nav className={styles.nav}>
                  {subNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      className={styles.navLink}
                      activeClassName={styles.active}
                    >
                      <item.icon className={styles.icon} />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  ))}
                </nav>
              </aside>
              <div className={styles.panel}>{children}</div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
