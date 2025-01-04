import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/util/api";
import MainHome from "./components/home/main/MainHome";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainHome />
    </QueryClientProvider>
  );
}

export default App;
