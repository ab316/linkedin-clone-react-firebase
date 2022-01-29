import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  Search,
  SearchIcon,
} from './styled';

function Header() {
  const navItems = [
    {href: '/home', image: 'nav-home.svg', text: 'Home'},
    {href: '/network', image: 'nav-network.svg', text: 'Network'},
    {href: '/jobs', image: 'nav-jobs.svg', text: 'Jobs'},
    {href: '/messaging', image: 'nav-messaging.svg', text: 'Messaging'},
    {
      href: '/notifications',
      image: 'nav-notifications.svg',
      text: 'Notifications',
    },
  ];
  const activeNavItem = 'Home';

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="Home" />
          </a>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="Search" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrap>
            {navItems.map((item) => (
              <NavList
                key={item.href}
                className={item.text === activeNavItem ? 'active' : ''}>
                <a href={item.href}>
                  <img src={`/images/${item.image}`} alt="Icon" />
                  <span>{item.text}</span>
                </a>
              </NavList>
            ))}
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;
