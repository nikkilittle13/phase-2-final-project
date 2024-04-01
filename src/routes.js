import App from "./components/App";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Submission from "./pages/Submission";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/artists",
    element: <Artists />
  },
  {
    path: "/albums",
    element: <Albums />
  },
  {
    path: "/submission",
    element: <Submission />
  }
]

export default routes;