import { Container } from "./styles/container";
import { RoutesMain as Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Container>
          <Routes />
        </Container>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
