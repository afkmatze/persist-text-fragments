import { FramgentMarkerOptions, FramgentMarkerTagOptions, MarkerPair } from './interfaces';
export declare const defaultTag: FramgentMarkerTagOptions;
export declare class CBMarker {
    static CreateId(options?: FramgentMarkerOptions): string;
    static Create(options?: FramgentMarkerOptions): MarkerPair;
}
