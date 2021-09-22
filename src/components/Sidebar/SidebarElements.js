import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";

/** SidebarContainer rendering <aside> tag */
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #101522;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  
`;
/** CloseIcon rendering <react icon> tag */
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
/** Icon component rendering <div>tag */
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
/** SidebarWrapper component rendering <div>tag */
export const SidebarWrapper = styled.div`
  color: #fff;
`;
/** SidebarMenu component rendering <ul>tag */
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
/** SidebarLink component rendering <Link>tag */
export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #FF006c;
    transition: 0.2 ease-in-out;
  }
`;
/** SideBtnWrap component rendering <div>tag */
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
/** SidebarRoute component rendering <Link>tag */
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #10c3bc;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FF006c;
    color: #010606;
  }
`;