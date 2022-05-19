import ReactDOM from "react-dom";
import { Start } from "../Components/Pages/start";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MyEyeMarketing } from "../Components/Pages/my-eye-marketing";
import { ContentBrowser } from "../Components/Pages/content-browser";
import LayoutPanel from "../Components/Pages/layout-panel";
import { BlinkingEyeProvider } from '../Components/BlinkingEye/blinking-eye-btn-provider';

const app = document.getElementById("root");
ReactDOM.render(
    <BlinkingEyeProvider>
      <HashRouter basename="">
          <Routes>
            <Route path='/' element={<Start/>}>

              {/* <Route path="/my-eye-marketing" element={<MyEyeMarketing />} /> */}
              <Route path="/browser" element={<ContentBrowser />} />
              <Route path="/layout" element={<LayoutPanel />} />

            </Route>
          </Routes>
      </HashRouter>
    </BlinkingEyeProvider>
  , app);