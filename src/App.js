import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Main from "./Components/Main";
// import DataFetch from "./Components/DataFetch";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path="error"
          element={<div>oops, something went wrong.</div>}
        />
        <Route path="*" element={<div>not found</div>} />
      </Routes>

      {/* <DataFetch /> */}
    </div>
  );
}

export default App;
