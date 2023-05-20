'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLinkList } from './NavlinkList';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white w-full h-full flex items-center justify-between font-medium">
      <div
        id="logo-container"
        className="bg-white z-50 lg:w-auto w-full flex justify-between"
      >
        <img
          src="/images/logotipo.svg"
          className="md:cursor-pointer h-9"
          alt="Logotipo que possui uma imagem em forma de M e a palavra metha"
        />

        <div
          className="lg:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="h-8 cursor-pointer text-icons lg:hidden" />
          ) : (
            <Bars3Icon className="h-8 cursor-pointer text-icons lg:hidden" />
          )}
        </div>
      </div>
      <ul className="lg:flex hidden items-center gap-8">
        <NavLinkList />
      </ul>
      <ul
        className={`
            lg:hidden bg-white fixed w-full top-0 overflow-y-hidden bottom-0 py-20 pl-4
            duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
      >
        <NavLinkList />
      </ul>
    </nav>
  );
}
