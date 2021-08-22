import Podcast from "./Pages/Common/Podcast";
import Videocast from "./Pages/Common/Videocast";
import VideoDetails from "./Components/Videocast/VideoDetails";
import LandingPage from "./Pages/Common/LandingPage";
import NotFound from "./Pages/Common/NotFound";

export const Routes = [
  { path: "/podcast", component: Podcast },
  { path: "/videocast/:title", component: VideoDetails },
  { path: "/videocast", component: Videocast },
  { path: "/", component: LandingPage, exact: "exact" },
  { component: NotFound },
];
