import ReactDOM from "react-dom";
import { Start } from "../Components/Pages/start";
import { HashRouter, Routes, Route } from "react-router-dom";
import MyEyeMarketing from "../Components/Pages/my-eye-marketing";
import { ContentBrowser } from "../Components/Pages/content-browser";
import LayoutPanel from "../Components/Pages/layout-panel";
import { BlinkingEyeProvider } from '../Components/BlinkingEye/blinking-eye-btn-context';
import BackgroundProvider from "../Components/Background/background-provider";
import { LayoutDatabaseContextProvider } from "../Components/ContextAndHooks/layout-database-context";
import { ChangeLayoutItemContextProvider } from '../Components/ContextAndHooks/change-layout-item-context';
import AppErrorBoundary from '../Components/ErrorHandeling/app-error-boundary';

const app = document.getElementById("root");
ReactDOM.render(
  <AppErrorBoundary>
    <LayoutDatabaseContextProvider>
      <ChangeLayoutItemContextProvider>
        <BackgroundProvider>
          <BlinkingEyeProvider>
            <HashRouter basename="">
              <Routes>
                <Route path='/' element={<Start/>}>
                  <Route path="/browser" element={<ContentBrowser />} />
                  <Route path="/layout" element={<LayoutPanel />} />
                </Route>
              </Routes>
            </HashRouter>
          </BlinkingEyeProvider>
        </BackgroundProvider>
      </ChangeLayoutItemContextProvider>
    </LayoutDatabaseContextProvider>
  </AppErrorBoundary>
, app);