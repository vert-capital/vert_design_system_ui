export function mountQueryParams(params: any): string {
  return Object.keys(params)
    .reduce((acc: string[], cur: string) => {
      if (params[cur] === undefined || !params[cur]) return acc;
      if (Array.isArray(params[cur])) {
        return [...acc, ...params[cur].map((c: string) => `${cur}=${c}`)];
      }
      return [...acc, `${cur}=${params[cur]}`];
    }, [])
    .join("&");
}
