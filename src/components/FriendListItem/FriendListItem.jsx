import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.poster} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      {isOnline ? (
        <p className={css.text__green}>Online</p>
      ) : (
        <p className={css.text__red}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
