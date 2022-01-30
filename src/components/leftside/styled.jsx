import styled from 'styled-components';

export const Container = styled.div`
  grid-area: leftside;
`;

export const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  background: #fff url('/images/photo.svg') no-repeat center/60%;
  width: 72px;
  height: 72px;
  margin: -38px auto 12px;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
`;

export const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

export const AddPhotoText = styled.div`
  color: var(--linkedinBlueColor);
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  cursor: pointer;
`;

export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0;
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: #000;
        }
      }
    }
  }

  svg {
    color: #000;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

export const Item = styled.a`
  display: block;
  border-color: rgba(0, 0, 0, 0.8);
  padding: 12px;
  line-height: 1;

  span {
    display: flex;
    color: #000;
    font-size: 12px;
    font-weight: 500;

    img {
      color: rgba(255, 0, 0, 0.8);
      margin-right: 6px;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;
