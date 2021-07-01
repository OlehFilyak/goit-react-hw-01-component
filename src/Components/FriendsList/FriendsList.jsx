import css from "./FriendsList.module.css";
function FriendsList({ friends }) {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li className={css.item} key={id}>
            <span
              className={`${css.status} ${
                isOnline ? css.statusOnline : css.statusOfline
              }`}
            ></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
