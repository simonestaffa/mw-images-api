import environmentLocal from "../../config/environment.local";
import environmentProduction from "../../config/environment.production";

export interface Environment {
    Google: {
        id: string,
        secret: string,
        redirect_url: string
    }
}
let e: Environment;
switch(process.env.NODE_ENV) {
    case 'local': e = environmentLocal; break;
    case 'production': e = environmentProduction; break;
}
export const Config = e;
