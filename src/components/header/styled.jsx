import styled from 'styled-components';

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
  line-height: 0;
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 280px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: none;

  .active {
    span:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 80px;
    min-height: 52px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    background: transparent;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
