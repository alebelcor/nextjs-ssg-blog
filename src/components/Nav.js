import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex flex-row flex-no-wrap justify-between">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
      </ul>
    </nav>
  );
};

export default Nav;
