import {
  AddPhotoText,
  ArtCard,
  CardBackground,
  Container,
  Item,
  Link,
  Photo,
  UserInfo,
  Widget,
} from './styled';

function LeftSide() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>

          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="Widget" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="Item" />
            My Items
          </span>
        </Item>
      </ArtCard>
    </Container>
  );
}

export default LeftSide;
