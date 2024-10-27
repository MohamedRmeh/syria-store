"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "../functions/NavFunctions/Cart";
import Invoices from "../functions/NavFunctions/Invoices";
import Search from "../functions/NavFunctions/Search";
import Logo from "../functions/NavFunctions/Logo";
import Menu from "../functions/NavFunctions/Menu";

const Navbar = () => {
  const loggedIn = false;
  const role = "مستفيد";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(false);

  useEffect(() => {
    const userLogged = loggedIn;
    const roleUser = role;
    setUserRole(roleUser);
    setIsLoggedIn(userLogged);
  }, [loggedIn, role]);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 22;

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsVisible(true);
      return;
    }
    if (window.scrollY > lastScrollY + scrollThreshold) {
      setIsVisible(false);
    } else if (window.scrollY < lastScrollY - scrollThreshold) {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 sm:p-6 bg-[#F8F8F8] shadow-lg z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col gap-3 md:mb-6 md:flex-row md:justify-between">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex items-center gap-1">
            <Menu />
            <Logo />
          </div>
          <div className="md:hidden flex items-center gap-2">
            {isLoggedIn ? (
              <Link href="/api/profile">
                <Image
                  src="/icons/user.png"
                  width={35}
                  height={35}
                  alt="user"
                />
              </Link>
            ) : (
              <Link href="/api/auth/login">
                <Image
                  src="/icons/user.png"
                  width={35}
                  height={35}
                  alt="user"
                />
              </Link>
            )}
            <Cart />
            {userRole === "معين" && <Invoices />}
          </div>
        </div>
        <Search />
        <div className="hidden md:flex gap-3 items-center">
          {isLoggedIn ? (
            <Link href="/api/profile">
              <Image src="/icons/user.png" width={35} height={35} alt="user" />
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <Image src="/icons/user.png" width={35} height={35} alt="user" />
            </Link>
          )}
          <Cart />
          {userRole === "معين" && <Invoices />}
        </div>
      </div>
      <ul className="sm:flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-10 text-[13px] sm:text-[15px] font-sans mt-4 hidden">
        <li>
          <Link href="/">الرئيسية</Link>
        </li>
        <li>
          <Link href="/">خدماتنا</Link>
        </li>
        <li>
          <Link href="/api/categories/dietetics">المواد الغذائية</Link>
        </li>
        <li>
          <Link href="/api/categories/vegetablesAndfruits">
            سوق الخضار والفاكهة
          </Link>
        </li>
        <li>
          <Link href="/api/categories/chickens">سوق الدواجن</Link>
        </li>
        <li>
          <Link href="/api/categories/cheeseDairy">البان واجبان</Link>
        </li>
        <li>
          <Link href="/">هدايا وعطورات</Link>
        </li>
        <li>
          <Link href="/">الصحة والجمال</Link>
        </li>
        <li>
          <Link href="/">أدوات المنزل</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
