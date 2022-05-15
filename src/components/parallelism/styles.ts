// deps
import styled from "styled-components";

// utils
import { colors } from "./utils";

// assets
import { processorIntel } from "./assets";

// types
import { NavItemProps } from "./types";

export const Container = styled.section``;

export const Header = styled.header`
  padding: 3rem 6rem;

  position: relative;

  background: ${colors.background.grey.light};
`;

export const Title = styled.h1`
  margin-bottom: 1.25rem;

  grid-area: title;

  color: ${colors.foreground.black.normal};
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Text = styled.p`
  margin-bottom: 0.5rem;

  grid-area: text;

  max-inline-size: 50%;
  color: ${colors.foreground.black.light};
  font-size: 1rem;
`;

export const I = styled.i``;

export const B = styled.b``;

export const U = styled.ins``;

export const ProcessorImage = styled.img.attrs({
  src: processorIntel.src,
})`
  top: 1rem;
  right: 6rem;
  height: 18rem;
  z-index: 10;

  position: absolute;
`;

export const Cards = styled.div`
  padding: 3rem 6rem;

  display: flex;
  gap: 2rem;

  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Navigator = styled.div`
  height: 1.5rem;
  bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
`;

export const NavItem = styled.div<NavItemProps>`
  width: ${({ active }) => (active ? 1.5 : 1)}rem;
  height: ${({ active }) => (active ? 1.5 : 1)}rem;

  border-radius: 10rem;

  background: ${({ color }) => color};

  :hover {
    transform: scale(125%);
    transition: 0.1s;
  }
`;
