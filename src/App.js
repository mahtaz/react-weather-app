import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        open sourced on{" "}
        <a href="https://github.com/mahtaz/react-weather-app">github</a>
      </header>
    </div>
  );
}

export default App;
