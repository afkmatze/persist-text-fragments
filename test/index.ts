import 'mocha'
import { expect } from 'chai'
import { CBMarker } from '../dist'

describe ('marker' , () => {

  it('generates slug id', () => {
    const markerId = CBMarker.CreateId()
    expect(markerId).to.be.a('string').with.length.lessThan(8)
  })
  
  it('generates long id', () => {
    const markerId = CBMarker.CreateId({useSlug: false})
    expect(markerId).to.be.a('string').with.length.greaterThan(8)
  })

  it('generates marker pair', () => {
    const markerPair = CBMarker.Create()
    expect(markerPair).to.be.an.instanceof(Array).with.lengthOf(2)
  })

} )