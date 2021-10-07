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
  { path: "/podcast", component: Podcast, exact: true },
  { path: "/login", component: Login, exact: true },
  { path: "/profile/:user", component: Profile },
  { path: "/myprofile", component: Profile, exact: true },
  { path: "/forgotPassword", component: ForgotPassword, exact: true },
  { path: "/podcast/:title", component: FullFeed },
  { path: "/feed/:category/:postId", component: FullFeed },
  { path: "/myprofile/:category/:postId", component: FullFeed },
  { path: "/videocast", component: Videocast },
  { path: "/dashboard", component: Dashboard },
  { path: "/article", component: LandingPage },
  { path: "/story", component: LandingPage },
  { path: "/poetry", component: LandingPage },
  { path: "/review", component: LandingPage },
  { path: "/", component: LandingPage, exact: true },
  { component: NotFound },
];
