import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.card}>
      <div className={css.card__header}>
        <img
          src={image}
          alt={tag}
          className={css.poster}
          width={100}
          height={100}
        />
        <p className={css.text__name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text__loc}>{location}</p>
      </div>
      <ul className={css.card__list}>
        <li className={css.item}>
          <span className={css.tag}>Followers</span>
          <span className={css.title}>{followers}</span>
        </li>

        <li className={css.item}>
          <span className={css.tag}>Views</span>
          <span className={css.title}>{views}</span>
        </li>

        <li className={css.item}>
          <span className={css.tag}>Likes</span>
          <span className={css.title}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
