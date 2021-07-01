import user from "./data/user.json";
import statistics from "./data/statistics.json";
import transactions from "./data/transactions.json";
import "./App.css";
import StatisticSection from "./Components/StatisticSection/StatisticSection";
import SociallNetworkProfile from "./Components/SocialNetworkProfile/SocialNetworkProfile";
import FriendsList from "./Components/FriendsList/FriendsList";
import friends from "./data/friends.json";
import TransactionHisory from "./Components/TransactionHisory/TransactionHisory";
function App() {
  return (
    <div className="container">
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
      <StatisticSection statistics={statistics} />
      <FriendsList friends={friends} />
      <TransactionHisory transactions={transactions} />
    </div>
  );
}

export default App;
