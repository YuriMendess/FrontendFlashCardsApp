import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { GlobalStyle } from "./styles/globalstyle";
import { Container } from "./styles/layout";

export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <SignUp/>
    </Container>
  )
}
