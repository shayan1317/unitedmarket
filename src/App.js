import "./App.css";
import { NativeBaseProvider } from "native-base";
import HeaderComp from "./components/Header/HeaderComp";
import Banner from "./components/Banner/Banner";
import Properties from "./components/Properties/Properties";
import PlatformAnalysis from "./components/PlatformAnalysis/PlatformAnalysis";
import Features from "./components/Features/Features";
import GetNotified from "./components/Getnotified/GetNotified";
import Footer from "./components/Footer/Footer";
import Customers from "./components/Customers/Customers";
import Form from "./components/Auth/Form";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <NativeBaseProvider>
  
      {/* <ToastContainer></ToastContainer> */}
      {/* <HeaderComp /> */}
      {/* <div className="App">
        <Banner />
        <Properties />
        <PlatformAnalysis />
        <Features />
        <Customers />
        <GetNotified />

        <Footer />
      </div> */}
      <Form />
    </NativeBaseProvider>
  );
}

export default App;
