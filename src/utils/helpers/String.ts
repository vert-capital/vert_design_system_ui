export default class String {
  static capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static isDate(date: string) {
    return date.match(/^\d{4}-\d{2}-\d{2}$/);
  }

  static isDateTime(date: string) {
    return date.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/);
  }
}