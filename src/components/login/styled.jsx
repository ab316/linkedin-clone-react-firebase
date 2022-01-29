import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 16px;
  max-width: 1128px;
  margin: auto;
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

export const Join = styled.a`
  padding: 10px 12px;
  margin-right: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px var(--linkedinBlueColor);
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: transparent;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 700px;
  padding: 60px 0 138px 0;
  width: 100%;
  max-width: 1128px;

  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

export const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    color: rgba(143, 88, 73);
    line-height: 1.2;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 32px;
      font-weight: 300;
      width: 100%;
      line-height: 1.3;
    }
  }

  img {
    width: 750px;
    height: 670px;
    position: absolute;
    top: 50px;
    right: -250px;

    @media (max-width: 768px) {
      width: 100%;
      position: initial;
      height: initial;
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    margin: auto;
    margin-top: 40px;
  }
`;

export const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 60%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
