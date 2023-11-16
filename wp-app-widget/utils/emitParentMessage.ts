const messages = {
  CONFIRMED: () => window.parent.postMessage('CONFIRMED', '*'),
  BACK: () => window.parent.postMessage('BACK', '*'),
  ERROR: () => window.parent.postMessage('ERROR', '*'),
  SUCCESS: () => window.parent.postMessage('SUCCESS', '*'),
  SUCCESS_EGIFT: () => window.parent.postMessage('SUCCESS_EGIFT', '*'),
  SUCCESS_WCP: () => window.parent.postMessage('SUCCESS_WCP', '*'),
  GIFT_DETAILS: () => window.parent.postMessage('GIFT_DETAILS', '*')
}

export default messages
