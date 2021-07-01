import user from "./data/user.json";
import statistics from "./data/statistics.json";
import "./App.css";
import StatisticSection from "./Components/StatisticSection/StatisticSection";
import SociallNetworkProfile from "./Components/SocialNetworkProfile/SocialNetworkProfile";

function App() {
  return (
    <div>
      <SociallNetworkProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        avatarWidth={100}
        avatarWeight={100}
      />
      <StatisticSection
        id={statistics.id}
        label={statistics.label}
        percentage={statistics.percentage}
      />
    </div>
  );
}

export default App;
