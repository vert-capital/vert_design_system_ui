import { IEventCard } from "@/utils/types/calendar";
import { ref, unref } from "vue";

export function useCalendar(
  url: string,
  authorization: string,
  method: string,
  eventClass: any
) {
  const _url = unref(url);
  const _authorization = unref(authorization);
  const _method = unref(method) || "GET";

  async function getEvents(params?: any): Promise<IEventCard[]> {
    if (!_url || !_authorization) {
      return;
    }

    const _params = params ? params : {};

    return await fetch(
      `${_url}?event_data_before=${
        _params?.event_data_before ? params.event_data_before : ""
      }&event_data_after=${
        params?.event_data_after ? _params.event_data_after : ""
      }&page=${params?.page ? _params.page : 1}&page_size=${
        params?.per_page ? _params.per_page : 10
      }`,
      {
        credentials: "same-origin",
        method: _method,
        headers: {
          Authorization: _authorization,
        },
      }
    ).then(async (res) => {
      if (res) {
        const _res = await res.json();
        const data = _res.data ? _res.data : _res.results;
        if (eventClass === undefined) {
          return [];
        }
        if (typeof eventClass == "function") {
          return data.map((event: any) => new eventClass(event).event_formated);
        }
        return data.map(
          (event: any) => new eventClass.Event(event).event_formated
        );
      }
    });
  }

  return { getEvents };
}
