import { number } from 'card-validator'

export const validateCreditCard = (creditCardNumber: string) => {
  return number(creditCardNumber)
}
