export interface FramgentMarkerTagOptions {
  head:string
  tail:string
}

export interface FramgentMarkerOptions {
  tag?:FramgentMarkerTagOptions
  useSlug?:boolean
}

export type MarkerPair = [string,string]