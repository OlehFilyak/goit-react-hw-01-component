import user from "./data/user.json";
import "./App.css";

import SociallNetworkProfile from "./Components/SocialNetworkProfile/SocialNetworkProfile";

function App() {
  return (
    <SociallNetworkProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;
