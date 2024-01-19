import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route></Route>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
