import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`An Sreyas Institute of Engineering and Technology student project. ${year}`}</footer>;
};

export default Footer;
