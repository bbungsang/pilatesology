export class SuperEntity<T = any> {
  constructor(prop?: T) {
    if (prop) {
      Object.entries(prop).forEach(([key, value]) => {
        this[key] = value
      })
    }
  }
}
