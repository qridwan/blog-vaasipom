import Podcast from "./Pages/Common/Podcast";
import Videocast from "./Pages/Common/Videocast";
import VideoDetails from "./Components/Videocast/VideoDetails";
import LandingPage from "./Pages/Common/LandingPage";
import NotFound from "./Pages/Common/NotFound";
import FullFeed from "./Components/LandingPage/FullFeed";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Profile from "./Pages/Profile/Profile";

export const Routes = [
  { path: "/podcast", component: Podcast, exact: "exact" },
  { path: "/login", component: Login , exact: "exact" },
  { path: "/profile", component: Profile , exact: "exact" },
  { path: "/forgotPassword", component: ForgotPassword , exact: "exact" },
  { path: "/podcast/:title", component: FullFeed },
  { path: "/feed/:title", component: FullFeed },
 
  { path: "/videocast/:title", component: VideoDetails },
  { path: "/videocast", component: Videocast },
  { path: "/dashboard", component: Dashboard },
  { path: "/", component: LandingPage, exact: "exact" },
  { component: NotFound },
];
