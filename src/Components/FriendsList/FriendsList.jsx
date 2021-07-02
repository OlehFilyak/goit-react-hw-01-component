import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";
function FriendsList({ friends }) {
  return (
    <div>
      <ul className={css.friendList}>
        <FriendListItem friends={friends} />
      </ul>
    </div>
  );
}

export default FriendsList;
