/* Modules */

import React from 'react';
import styles from './profile.module.css';
import {NavLink} from "react-router-dom";

/* Component */

const Profile = React.memo(props => {
    /* Render elements */

    return (
        <article className={styles['profile']}>
            <div className={styles['info-wrapper']}>
                <div className={styles['avatar-wrapper']}>
                    <img src={props.userAvatar} alt="user avatar" className={styles['avatar-icon']}/>
                </div>
                <div className={styles['info']}>
                    <h1 className={styles['user-name']}>{props.userName}</h1>
                    <div className={styles['status-wrapper']}>
                        {!props.editMode ? (
                            <p className={styles['status']} onClick={() => props.openEditModeStatus(true)}>{props.userStatus ? props.userStatus : Number(props.userId) === Number(props.myId) ? 'Изменить статус' : ''}</p>
                        ) : (
                            <form action="" className={styles['status-form']}>
                                <input className={styles['status-input']} onChange={e => props.changeStatusInput(e.target.value)} type="text" name='statusInput' value={props.statusInput} maxLength={300}/>
                                <button className={styles['save-status-btn']} onClick={props.saveStatus}>Сохранить статус</button>
                                <button className={styles['close-status-btn']} onClick={props.closeStatus}>Закрыть</button>
                            </form>
                        )}
                    </div>
                    {
                        Number(props.userId) !== Number(props.myId) && (
                            <div className={styles['profile-action-buttons']}>
                                <NavLink className={styles['write-message']} to={`/messages/${props.userId}`}>Написать сообщение</NavLink>
                                {props.userIsFollowing ? (
                                    <button onClick={() => props.unFollowToUser(props.userId)} className={styles['un-follow-user']}>Удалить из друзей</button>
                                ) : (
                                    <button onClick={() => props.followToUser(props.userId)} className={styles['follow-user']}>Добавить в друзья</button>
                                )}
                            </div>
                        )
                    }
                </div>
            </div>
        </article>
    );
});

/* Export of component */

export default Profile;