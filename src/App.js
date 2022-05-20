import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { initialState, StateProvider } from "./state/StateProvider";

function App() {
  const [appState, setAppState] = useState(initialState);

  const updateSearchTerm = (newSearchTerm) => {
    setAppState({ ...appState, searchTerm: newSearchTerm });
  };

  const contextObject = {
    searchTerm: appState.searchTerm,
    updateSearchTerm,
  };

  return (
    <StateProvider value={contextObject}>
      <div className="App">
        <Home />
      </div>
    </StateProvider>
  );
}

export default App;
