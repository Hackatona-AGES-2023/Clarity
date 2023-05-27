import { Routes, Route } from "react-router-dom";
import ClearTextPage from "../pages/ClearTextPage";
import HowToUsePage from "../pages/HowToUsePage";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={'/'} element={<HowToUsePage />} />
      <Route path={'/translate'} element={<ClearTextPage />} />
    </Routes >
  )
}