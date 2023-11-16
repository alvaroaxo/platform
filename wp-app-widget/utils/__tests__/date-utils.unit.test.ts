import { dateUtil } from '@/utils/date-utils'
import { DateTime } from 'luxon'

const format = 'MM/dd/yy'
const date = DateTime.local()
const futureDate = date.plus({ month: 1 }).toFormat(format)

describe( 'dateUtil.isValid', () => {
  it( 'it should return true for a valid date', () => {
    expect( dateUtil.isValid( date.toFormat(format), format ) ).toBe( true )
  } )

  it( 'it should return false for an invalid date', () => {
    expect( dateUtil.isValid( '25/12/23', format ) ).toBe( false )
  } )

  it( 'it should return true for a date in the past', () => {
    const pastDate = date.minus({ month: 1 }).toFormat(format)
    expect( dateUtil.isValid( pastDate, format, 'past' ) ).toBe( true )
  } )

  it( 'it should return false for a date in the future', () => {
    expect( dateUtil.isValid( futureDate, format, 'past' ) ).toBe( false )
  } )

  it( 'it should return true for a date in the future if "both" validation is used', () => {
    expect( dateUtil.isValid( futureDate, format, 'both' ) ).toBe( true )
  } )

  it( 'it should return false for an invalid format', () => {
    expect( dateUtil.isValid( '30/01/25', format ) ).toBe( false )
  } )
} )
