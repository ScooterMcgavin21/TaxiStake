import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
/** Scroll to top */
const toggleHome = () => {
  scroll.scrollToTop();
};

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                  <FooterLink to='/sign-up'>FAQ</FooterLink>
                  <FooterLink to='/'>Testimonials</FooterLink>
                  <FooterLink to='/'>Careers</FooterLink>
                  <FooterLink to='/'>Investors</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  <FooterLink to='/'>Contact</FooterLink>
                  <FooterLink to='/'>Support</FooterLink>
                  <FooterLink to='/'>Destinations</FooterLink>
                  <FooterLink to='/'>Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
              <FooterLinkTitle>Legal</FooterLinkTitle>
                  <FooterLink to='/'>Terms of Service</FooterLink>
                  <FooterLink to='/'>Privacy Policy</FooterLink>
                  <FooterLink to='/'>Whitepaper</FooterLink>
                  <FooterLink to='/'>Miner Fees</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                  <FooterLink to='/'>Instagram</FooterLink>
                  <FooterLink to='/'>Facebook</FooterLink>
                  <FooterLink to='/'>Youtube</FooterLink>
                  <FooterLink to='/'>Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                <SocialIcon />
                TaxiStake
              </SocialLogo>
              <WebsiteRights>TaxiStake © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='//www.twitter.com/' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer;
