/* Modules */

import React from 'react';
import avatar from './../../../assets/images/avatar-icon.png';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import {Preloader} from "../../elements/preloader/preloader";

/* Component */

const Users = props => {
    /* UI elements */

    const friends = props.friends.map((element) => {
        return (
            <div className={styles['link']}>
                <NavLink to={`/profile/${element.id}`}>
                    <img src={element.photos.large ? element.photos.large : avatar} alt="user avatar" className={styles['avatar']}/>
                </NavLink>
                <div className={styles['info']}>
                    <NavLink className={styles['name']} to={`/profile/${element.id}`}>{element.name}</NavLink>
                    <NavLink to={`/messages/${element.id}`} className={styles['write-message']}>Написать сообщение</NavLink>
                    <button className={styles['un-follow']} onClick={() => props.onUnFollow(element.id)}>Удалить из друзей</button>
                </div>
            </div>
        );
    });

    const users = props.users.map((element) => {
        return (
            <div className={styles['link']}>
                <NavLink to={`/profile/${element.id}`}>
                    <img src={element.photos.large ? element.photos.large : avatar} alt="user avatar" className={styles['avatar']}/>
                </NavLink>
                <div className={styles['info']}>
                    <NavLink className={styles['name']} to={`/profile/${element.id}`}>{element.name}</NavLink>
                    <button className={styles['follow']} onClick={() => props.onFollow(element.id)}>Добавить в друзья</button>
                </div>
            </div>
        );
    });

    /* Render of component */

    return (
        <article className={styles['users']}>
            <div className={styles['friends-wrapper']}>
                <h1 className={styles['title']}>Друзья</h1>
                <div className={styles['content']}>
                    <Preloader
                        value={props.isFetchingFriends}
                        elements={friends}
                    />
                </div>
                <div className={styles['buttons-wrapper']}>
                    <button disabled={props.pageFriends <= 1} className={`${props.pageFriends <= 1 && styles['previous-page-disabled']} ${styles['previous-page']}`} onClick={props.onPagePrevFriends}>Назад</button>
                    <button disabled={Number(props.maxCountFriends) <= (Number(props.pageSize) * Number(props.pageFriends))} className={`${Number(props.maxCountFriends) <= (Number(props.pageSize) * Number(props.pageFriends)) && styles['next-page-disabled']} ${styles['next-page']}`} onClick={props.onPageNextFriends}>Дальше</button>
                </div>
            </div>
            <div className={styles['users-wrapper']}>
                <h1 className={styles['title']}>Пользователи</h1>
                <div className={styles['content']}>
                    <Preloader
                        value={props.isFetchingUsers}
                        elements={users}
                    />
                </div>
                <div className={styles['buttons-wrapper']}>
                    <button disabled={props.pageUsers <= 1} className={`${props.pageUsers <= 1 && styles['previous-page-disabled']} ${styles['previous-page']}`} onClick={props.onPagePrevUsers}>Назад</button>
                    <button disabled={Number(props.maxCountUsers) <= (Number(props.pageSize) * Number(props.pageUsers))} className={`${Number(props.maxCountUsers) <= (Number(props.pageSize) * Number(props.pageUsers)) && styles['next-page-disabled']} ${styles['next-page']}`} onClick={props.onPageNextUsers}>Дальше</button>
                </div>
            </div>
        </article>
    )
};

/* Export of component */

export default Users;