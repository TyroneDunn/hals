import EventEmitter from "events";

export const HalsEventEmitter = new EventEmitter();

export const UserRegisteredEvent: string = 'userRegistered';
export const UserLoggedInEvent: string = 'userLoggedIn';
export const UserLoggedOutEvent: string = 'userLoggedOut';
