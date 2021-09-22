import { FaNetworkWired } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styled from "styled-components";
/** FooterContainer component rendering <div> tag */
export const FooterContainer = styled.div`
  background-color: #101522;
  //padding: 4rem 0 2rem 0;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
`;
/** FooterWrap component rendering <div> tag */
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
/** FooterLinksContainer component rendering <div> tag */
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
/** FooterLinksWrapper component rendering <div> tag */
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
/** FooterLinkItems component rendering <div> tag */
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
/** FooterLinkTitle component rendering <h2> tag */
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
/** FooterLink component rendering <Link> tag */
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

/** FooterSubscription component rendering <section> tag */
export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;
/** FooterSubHeading component rendering <p> tag */
export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;
/** FooterSubText component rendering <p> tag */
export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;
/** Form component rendering <form> tag */
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
/** FormInput component rendering <input> tag */
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
/** SocialMedia component rendering <section> tag */
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
/** SocialMediaWrap component rendering <div> tag */
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
/** SocialLogo component rendering <Link> tag */
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
/** SocialIcon component rendering <React Icon> tag */
export const SocialIcon = styled(FaNetworkWired)`
  margin-right: 10px;
`;
/** WebsiteRights component rendering <small> tag */
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;
/** SocialIcons component rendering <div> tag */
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
/** SocialIconLink component rendering <a> tag */
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;





