import styled from 'styled-components';

export const Container = styled.div`
  grid-area: rightside;
`;

export const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%);
  padding: 12px;
`;

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

export const FeedList = styled.ul`
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      display: flex;
      align-items: center;
      padding: 16px;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      background: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      font-weight: 600;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const Avatar = styled.div`
  background: url('images/hash-icon.svg') no-repeat center / contain;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const Recommendation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  color: var(--linkedinBlueColor);
  img {
    align-self: flex-end;
  }
`;
