import {GetUserDTO} from "../user/users-dtos";
import {User} from "../user/user";
const passportConfig = require('passport');
import LocalStrategy = require('passport-local');
import {validateHash} from "../utils/password.utility";
import {UsersRepository} from "../user/users-repository";
import {LocalStrategy as LocalStrategyConfig} from "../app/config.type";

// todo: confirm configuration with any data types functions correctly. This was a hack as I
//  could not find the function definitions with clear types for the relevant passport functions.

export const configurePassportLocalStrategy = (
    config: LocalStrategyConfig,
    usersRepository: UsersRepository
): void => {
    const userField = {
        usernameField: 'username',
        passwordField: 'password',
    };

    const verifyCallback = async (username: string, password: string, done: any): Promise<void> => {
        const dto: GetUserDTO = {username: username};
        const user: User | null = await usersRepository.getUser(dto);
        if (!user) {
            done(null, false);
            return;
        }

        if (!validateHash(
                password,
                user.hash,
                config.passwordSalt,
                config.hashingIterations,
                config.passwordLength,
                config.hashingAlgorithm
            )) {
            done(null, false);
            return;
        }

        done(null, user);
    };

    passportConfig.use(new LocalStrategy.Strategy(userField, verifyCallback));

    passportConfig.serializeUser((user: any, done: any) => {
        done(null, user.username);
    });

    passportConfig.deserializeUser(async (username: any, done: any) => {
        try {
            const dto: GetUserDTO = {username: username};
            const user = await usersRepository.getUser(dto);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};
