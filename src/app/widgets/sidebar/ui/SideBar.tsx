"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideBar.module.scss";
import {
  faDumbbell,
  faGear,
  faHouse,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
  icon: IconDefinition;
}

export const Path = {
  Home: "/",
  Login: "/login",
  User: "/user",
  Fitness: "/fitness",
  Settings: "/settings",
  NotFound: "*",
} as const;

const navItems: NavItem[] = [
  { href: Path.User, label: "User", icon: faUser },
  { href: Path.Home, label: "Home", icon: faHouse },
  { href: Path.Fitness, label: "Fitness", icon: faDumbbell },
  { href: Path.Settings, label: "Settings", icon: faGear },
];

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <nav>
        <ul>
          {navItems.map((item) => {
            return (
              <li key={item.href}>
                <FontAwesomeIcon icon={item.icon} />
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
