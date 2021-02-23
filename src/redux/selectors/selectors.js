/* Modules */

import avatar from './../../assets/images/avatar-icon.png';

/* Header selectors */

export const getStatusOfNotifications = state => state.header.notifications;

/* App */

export const getCurrentInitializedApp = state => state.app.initialized;

/* Authorized user */

export const getCurrentAuth = state => state.auth.isAuth;

export const getCurrentFetchingAuth = state => state.auth.isFetchingAuth;

export const getIdAU = state => state.auth.id;

export const getAvatarAU = state => state.auth.avatar ? state.auth.avatar : avatar;

export const getNameAU = state => state.auth.name;

export const getStatusAU = state => state.auth.status;