import { IEvent, IConfig } from '@/utils/types/calendar';
export default class Errors {
    static PREFIX: string;
    static SUFFIX: string;
    static checkEventProperties(event: IEvent): void;
    static checkConfig(config: IConfig): void;
}
