import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes/routes";
import { GlobalStyle } from "./styles/global-styles";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Routes />
      </QueryClientProvider>
    </>
  );
}

export default App;
