import css from "./SocialNetworkProfile.module.css";
function SociallNetworkProfile({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
  avatarWidth,
  awatarHeight,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={name}
          className={css.avatar}
          width={avatarWidth}
          heigth={awatarHeight}
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default SociallNetworkProfile;
