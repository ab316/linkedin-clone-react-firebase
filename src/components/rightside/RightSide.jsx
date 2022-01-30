import {
  Container,
  FeedList,
  FollowCard,
  Title,
  Avatar,
  Recommendation,
} from './styled';

function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="Feed" />
        </Title>

        <FeedList>
          <FeedItem title="#Linkedin" />
          <FeedItem title="#Video" />
        </FeedList>

        <Recommendation>
          <span>View all recommendations</span>
          <img src="/images/right-icon.svg" alt="Right" />
        </Recommendation>
      </FollowCard>
    </Container>
  );
}

const FeedItem = ({title}) => (
  <li>
    <Avatar />
    <div>
      <span>{title}</span>
      <button>
        <img src="/images/plus-icon.svg" alt="Plus" /> Follow
      </button>
    </div>
  </li>
);

export default RightSide;
