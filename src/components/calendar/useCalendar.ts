import { ref, unref } from "vue";

export function useCalendar(
  url: string,
  authorization: string,
  method: string,
  eventClass: any
) {
  const events = ref<any[] | null>(null);
  const _url = unref(url);
  const _authorization = unref(authorization);
  const _method = unref(method) || "GET";

  async function getEvents() {
    if (!_url || !_authorization) {
      return;
    }

    await fetch(`${_url}`, {
      credentials: "same-origin",
      method: _method,
      headers: {
        Authorization: _authorization,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    }).then(async (res) => {
      if (res) {
        const _res = await res.json();
        if (eventClass === undefined) {
          return;
        }
        if (typeof eventClass == "function") {
          events.value = _res.map(
            (event: any) => new eventClass(event).event_formated
          );
          return;
        }
        events.value = _res.map(
          (event: any) => new eventClass.Event(event).event_formated
        );
      }
    });
  }

  getEvents();

  return { events };
}
