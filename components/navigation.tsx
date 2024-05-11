"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styels from "../public/styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className={styels.nav}>
      <ul className={styels.list}>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🟠" : ""}
        </li>
        <li>
          <Link href="about-us">About us</Link>
          {path === "/about-us" ? "🟠" : ""}
        </li>
      </ul>
    </nav>
  );
}
