import { IEventCard } from "@/utils/types/calendar";
export declare function useCalendar(url: string, authorization: string, method: string, eventClass: any): {
    getEvents: (params?: any) => Promise<IEventCard[]>;
};
