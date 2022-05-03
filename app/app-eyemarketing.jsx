import ReactDOM from "react-dom";
import { Start } from "./Pages/start";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MyEyeMarketing } from "./Pages/my-eye-marketing";
import { ContentBrowser } from "./Pages/content-browser";


const app = document.getElementById("root");
ReactDOM.render(
    <HashRouter basename="">
        <Routes>
          <Route path='/' element={<Start/>}>
              
            <Route path="/my-eye-marketing" element={<MyEyeMarketing />} />
            <Route path="/browser" element={<ContentBrowser />} />
            
          </Route>
        </Routes>
    </HashRouter>, app);