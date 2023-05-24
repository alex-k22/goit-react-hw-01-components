import propTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item}>
          <FriendListItem 
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
};
