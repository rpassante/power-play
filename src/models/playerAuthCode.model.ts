/**
 * Created by rpassant on 5/1/2017.
 */
export class PlayerAuthCode {

    public active: boolean;
    public code: string;
    public favorite: boolean;

    constructor(active: boolean, code: string, favorite: boolean) {
        this.active = active;
        this.code = code;
        this.favorite = favorite;
    }
}