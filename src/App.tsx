import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GatheringPlacePage from "./pages/GatheringPlacePage";
import CampaignPage from "./pages/CampaignPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import EventsPage from "./pages/EventsPage";
import UpdatesPage from "./pages/UpdatesPage";
import GalleryPage from "./pages/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "gathering-place", element: <GatheringPlacePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "updates", element: <UpdatesPage /> },
      { path: "campaign", element: <CampaignPage /> },
      { path: "get-involved", element: <GetInvolvedPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
