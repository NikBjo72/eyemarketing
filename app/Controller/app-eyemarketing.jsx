import ReactDOM from "react-dom";
import { Start } from "../Components/Pages/start";
import { HashRouter, Routes, Route } from "react-router-dom";
import MyEyeMarketing from "../Components/Pages/my-eye-marketing";
import { ContentBrowser } from "../Components/Pages/content-browser";
import LayoutPanel from "../Components/Pages/layout-panel";
import { BlinkingEyeProvider } from '../Components/BlinkingEye/blinking-eye-btn-provider';
import BackgroundProvider from "../Components/Background/background-provider";
import { LayoutDatabaseContextProvider } from "../Components/layout-database-context";
import { ChangeLayoutItemContextProvider } from '../Components/change-layout-item-context';

const app = document.getElementById("root");
ReactDOM.render(
  <ChangeLayoutItemContextProvider>
    <LayoutDatabaseContextProvider>
      <BackgroundProvider>
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
      </BackgroundProvider>
    </LayoutDatabaseContextProvider>
  </ChangeLayoutItemContextProvider>
, app);