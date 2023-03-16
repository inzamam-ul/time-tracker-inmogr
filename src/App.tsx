import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/Logoand site.svg";
import TrackerContainer from "./components/TrackerContainer";

const AppWrapper = styled.div`
  background-color: #fff;
`;

const Nav = styled.nav`
  background-color: #c7f0df;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 90px;
`;

const H3 = styled.h3`
  background-color: transparent;
  text-align: center;
  color: #32a071;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
`;

const Main = styled.main`
  margin: 0px auto;
  width: 80%;
`;

function App() {
  return (
    <AppWrapper>
      <Nav>
        <Logo />
      </Nav>
      <Main>
        <H3>Time Tracker</H3>
        <TrackerContainer />
      </Main>
    </AppWrapper>
  );
}

export default App;
