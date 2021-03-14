/* Modules */

import avatar from './../../assets/images/avatar-icon.png';

/* Header selectors */

export const getStatusOfNotifications = state => state.header.notifications;

/* App */

export const getCurrentInitializedApp = state => state.app.initialized;

export const getAppFetching = state => state.app.appFetching;

/* Authorized user */

export const getCurrentAuth = state => state.auth.isAuth;

export const getCurrentFetchingAuth = state => state.auth.isFetchingAuth;

export const getIdAU = state => state.auth.id;

export const getAvatarAU = state => state.auth.avatar ? state.auth.avatar : avatar;

export const getNameAU = state => state.auth.name;

export const getStatusAU = state => state.auth.status;

/* Profile */

export const getUserId = state => state.profile.id;

export const getUserAvatar = state => state.profile.avatar ? state.profile.avatar : avatar;

export const getUserName = state => state.profile.name;

export const getUserStatus = state => state.profile.status;

export const getCurrentFetchingProfile =  state => state.profile.isFetchingProfile;

export const getCurrentFollowUser = state => state.profile.follow;

/* Users */

export const getArrayUsers = state => state.users.users;

export const getArrayFriends = state => state.users.friends;

export const getCurrentFetchingFriends = state => state.users.isFetchingFriends;

export const getCurrentFetchingUsers = state => state.users.isFetchingUsers;

export const getMaxCountFriends = state => state.users.maxCountFriends;

export const getMaxCountUsers = state => state.users.maxCountUsers;