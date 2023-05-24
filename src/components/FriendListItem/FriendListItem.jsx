import propTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={clsx(css.status, { [css.online]: isOnline })}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
    )
 }