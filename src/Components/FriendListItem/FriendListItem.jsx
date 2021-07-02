import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
function FriendListItem({ friends }) {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${
          isOnline ? css.statusOnline : css.statusOfline
        }`}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
}
export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
