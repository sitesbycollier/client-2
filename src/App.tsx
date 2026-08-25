import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GatheringCenterPage from "./pages/GatheringCenterPage";
import ProgramsPage from "./pages/ProgramsPage";
import CampaignPage from "./pages/CampaignPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import EventsPage from "./pages/EventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "gathering-center", element: <GatheringCenterPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "campaign", element: <CampaignPage /> },
      { path: "get-involved", element: <GetInvolvedPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
