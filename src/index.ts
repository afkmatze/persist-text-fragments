import * as cuid from 'cuid'

import { 
  FramgentMarkerOptions, 
  FramgentMarkerTagOptions, 
  MarkerPair 
} from './interfaces'

export * from './interfaces'

export const defaultTag:FramgentMarkerTagOptions = {
  head: '{{',
  tail: '}}'
}

export class CBMarker {

  static CreateId ( options:FramgentMarkerOptions={} ) : string {
    const { useSlug=true } = options
    return useSlug ? cuid.slug() : cuid()
  }

  static Create(options:FramgentMarkerOptions={}):MarkerPair {
    const {
      tag=defaultTag,
      useSlug=true
    } = options

    const markerId = CBMarker.CreateId(options)
    return [
      `${tag.head}${markerId}${tag.tail}`,
      `${tag.head}/${markerId}${tag.tail}`
    ]
  }

}