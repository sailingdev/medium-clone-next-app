import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import classNames from "classnames";

type Props = PropsWithChildren<LinkProps> & {
  exact?: boolean;
  activeClassName?: string;
  className?: string;
};

const NavLink: React.FC<Props> = ({
  exact = false,
  activeClassName = "",
  className = "",
  href,
  children,
  ...props
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href.toString());

  return (
    <Link
      href={href}
      className={classNames(className, { [activeClassName]: isActive })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
