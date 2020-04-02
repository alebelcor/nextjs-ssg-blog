import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="border-t border-black py-4">
        <div className="container mx-auto flex justify-between">
          <div>Some logo</div>

          <div>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Me</div>

          <div>Another logo</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
