import {
  Container,
  Nav,
  Join,
  SignIn,
  Section,
  Hero,
  Form,
  Google,
} from './styled';

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="Linkedin" />
        </a>

        <div>
          <Join href="/join">Join now</Join>
          <SignIn href="/signin">Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="Hero" />
        </Hero>

        <Form>
          <Google>
            <img src="/images/google.svg" alt="Google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
