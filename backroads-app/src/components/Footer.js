import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      {/* <ul className='footer-links'>
        {pageLinks.map((pageLink) => {
          const { id, href, text } = pageLink;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul className='footer-icons'>
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              key={socialLink.id}
              {...socialLink}
              itemClass='footer-icon'
            />
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
