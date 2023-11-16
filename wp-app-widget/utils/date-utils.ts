import { DateTime } from 'luxon'

export const dateUtil = {
  isValid: (dateString: string, format: string, validatePastFuture: 'past' | 'future' | 'both' = 'both') => {
    const isValid = DateTime.fromFormat(dateString, format).isValid
    if (!isValid) return false

    if (validatePastFuture === 'past') {
      return DateTime.fromFormat(dateString, format) < DateTime.local()
    }
    if (validatePastFuture === 'future') {
      return DateTime.fromFormat(dateString, format) > DateTime.local()
    }
    return true
  }
}
