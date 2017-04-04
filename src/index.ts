const cuid = require('cuid')

export type PersistentMarker = string

export class CBMarker {

  static Create():string {
    return cuid.slug()
  }

}