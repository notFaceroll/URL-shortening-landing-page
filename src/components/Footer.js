import React from 'react'
import { NavBlock, NavHeading, FooterItem } from './FooterElements';

export default function Footer(props) {
  return (
    <footer className='text-white text-center bg-neutral-veryDarkViolet flex flex-col gap-4 p-8 items-center'>
      <h3 className='text-3xl font-semibold'>Shortly</h3>
      <NavBlock>
        <NavHeading>Features</NavHeading>
        <ul>
          <FooterItem>Link Shortening</FooterItem>
          <FooterItem>Branded Links</FooterItem>
          <FooterItem>Analytics</FooterItem>
        </ul>
      </NavBlock>
      <NavBlock>
        <NavHeading>Resources</NavHeading>
        <ul>
          <FooterItem>Blog</FooterItem>
          <FooterItem>Developers</FooterItem>
          <FooterItem>Support</FooterItem>
        </ul>
      </NavBlock>
      <NavBlock>
        <NavHeading>Company</NavHeading>
        <ul>
          <FooterItem>About</FooterItem>
          <FooterItem>Our Team</FooterItem>
          <FooterItem>Carrers</FooterItem>
          <FooterItem>Contact</FooterItem>
        </ul>
      </NavBlock>
    </footer>
  );
}
