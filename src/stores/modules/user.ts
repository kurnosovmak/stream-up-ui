import {defineStore} from 'pinia';
import {User, UserToken} from '@/models/user';


type UserType = User | null
type UserTokenType = UserToken | null

interface UserState {
    user?: UserType,
    token?: UserTokenType
}

export const useUserStore = defineStore('user',{

    state: () => ({
        user: null,
        token: null
    } as UserState),

    getters: {
        getUser(): UserType {
            return this.user;
        },
        isAuth(): boolean {
            return this.token!=null
        },
    },

    actions: {

        setToken(token: UserTokenType) {
            this.token = token;
        },
        setUser(user: UserType) {
            this.user = user;
        },

        setUserAndToken(user: UserType, token: UserTokenType) {
            this.user = user;
            this.token = token;
        },

        resetState() {
            this.user = null;
            this.token = null;
        },

        /**
         * @description: login
         */
        async login(login: ReqParamsLogin) {
            if (login.login == 'test' && login.password == 'test') {
                this.setUserAndToken({
                        email: 'kurnosovmak@gmail.com',
                        id: '1',
                        name: 'Александр',
                        patronymic: 'Сергеевич',
                        surname: 'Курносов',
                    } as User,
                    {
                        token: '123123213'
                    } as UserToken);
            }
            return {request: true};
        },

        /**
         * @description: logout
         */
        async logout() {
            this.resetState();

            location.reload();
        },

    },
})
