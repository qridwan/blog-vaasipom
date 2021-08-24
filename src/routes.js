import Podcast from "./Pages/Common/Podcast";
import Videocast from "./Pages/Common/Videocast";
import VideoDetails from "./Components/Videocast/VideoDetails";
import LandingPage from "./Pages/Common/LandingPage";
import NotFound from "./Pages/Common/NotFound";
import FullFeed from "./Components/LandingPage/FullFeed";

export const Routes = [
  { path: "/podcast", component: Podcast, exact: "exact" },
  { path: "/podcast/:title", component: FullFeed },
  { path: "/feed/:title", component: FullFeed },
 
  { path: "/videocast/:title", component: VideoDetails },
  { path: "/videocast", component: Videocast },
  { path: "/", component: LandingPage, exact: "exact" },
  { component: NotFound },
];
