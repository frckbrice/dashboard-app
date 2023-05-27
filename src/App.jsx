import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
// import CreateProfile from "./components/CreateProfile";
import CreateProfile from "./components/forms/CreateProfile";
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/forms/EditProfile";
import { Profile } from "./components/useLocacalStorage";
import { useLocalStorage } from "./components/useLocacalStorage";
import BaseForm from "./components/forms/logon";

function App() {
  const { value, setValue } = useLocalStorage("form");
  return (
    <div className="App">
  
      
      <Routes>
        
        <Route path="/" element={<Layout />} index />
        <Route
          path="/createprofile"
          element={
            <Layout>
              <CreateProfile />
            </Layout>
          }
        />

        <Route
          path="/createprofile/viewprofile"
          element={
            <Layout>
              <ViewProfile />
            </Layout>
          }
        />

        <Route
          path="/createprofile/viewprofile/editprofile"
          element={
            <Layout>
              <EditProfile />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
