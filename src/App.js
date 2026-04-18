import "./App.css";
import { NativeBaseProvider } from "native-base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Form from "./components/Auth/Form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <NativeBaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/auth" element={<Form />} />
          <Route path="/login" element={<Form />} />
          <Route path="/signup" element={<Form />} />
        </Routes>
      </Router>
      <ToastContainer />
    </NativeBaseProvider>
  );
}

export default App;
