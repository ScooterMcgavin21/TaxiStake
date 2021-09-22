import { Link } from "react-scroll";
import styled from "styled-components";
// #10c3bc
// #FF006c
export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#FF006c' : '#10c3bc')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#fff' : '#101522')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#10c3bc' : '#FF006c')};
  }
`;