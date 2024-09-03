import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentInfo from "./routes/StudentInfo.tsx";
import StudentGrade from "./routes/StudentGrade.tsx";
import Home from "./routes/Home.tsx";
import NotFound from "./routes/NotFound.tsx";
import Summery from "./routes/Summery.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/info", element: <StudentInfo /> },
  { path: "/grade", element: <StudentGrade /> },
  { path: "/summery", element: <Summery /> },
  { errorElement: <NotFound /> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
