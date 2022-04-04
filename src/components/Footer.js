import React from 'react';
import { NavBlock, NavHeading, FooterItem } from './FooterElements';

export default function Footer(props) {
  return (
    <footer className="text-center text-white bg-neutral-veryDarkViolet ">
      <div className="flex flex-col items-center justify-between max-w-screen-lg gap-4 p-8 mx-auto sm:flex-row sm:items-start">
        <h3 className="text-3xl font-semibold">Shortly</h3>
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
        <div>Facebook Instagram Twitter Pinterest</div>
      </div>
    </footer>
  );
}
