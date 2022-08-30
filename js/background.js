/*
 * Background script for ZeroNet
 * Original authors: Karthikeyan VJ, Maciej Krüger
 */

console.log('zeronet-protocol-crx initialize!');

const ZERO_ACCEPTED_TLDS = [ /*'.zero', */ '.bit', '.zite']; // All tlds (beware .zero is now an offical tld - soon optional)
const ZERO_ACCEPTED_HOSTS = ['zero', '127.0.0.1:43110', 'localhost:43110']; // All hosts (zero must be included here)
//const ZERO_ACCEPTED_SCHEMES = ['zero', 'zeronet'];

// default settings data - location where your zeroNet is running
const ZERO_HOST = '127.0.0.1:43110';

//
const onRequestTlds = {
  conditions: [
    ...ZERO_ACCEPTED_TLDS.map(tld => new chrome.declarativeWebRequest.RequestMatcher({
      url: { hostSuffix: tld }, stages: ['onBeforeRequest']
    }))
  ],
  actions: [
    new chrome.declarativeWebRequest.RedirectByRegEx({
      from: String.raw`^(?:(http[s]?|ftp):\/)?\/?(([^:\/\s]+)(:[0-9]+)?)(((?:\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?)$`, // TODO can prolly simplify this regex
      to: `$1://${ZERO_HOST}/$2$5`
    })
  ]
};
const onRequestHosts = {
  conditions: [
    ...ZERO_ACCEPTED_HOSTS.map(host => new chrome.declarativeWebRequest.RequestMatcher({
      url: { hostEquals: host }, stages: ['onBeforeRequest']
    }))
  ],
  actions: [
    new chrome.declarativeWebRequest.RedirectByRegEx({
      from: String.raw`^(https?):\/\/(.*?)(?:\/|$)(.*)`,
      to: `$1://${ZERO_HOST}/$3`
    })
  ]
};
// no work
//const onRequestSchemes = {
//  conditions: [
//    new chrome.declarativeWebRequest.RequestMatcher({
//      url: { schemes: ZERO_ACCEPTED_SCHEMES }, stages: ['onBeforeRequest']
//    })
//  ],
//  actions: [
//    new chrome.declarativeWebRequest.RedirectByRegEx({
//      from: String.raw`^(?:[a-zA-Z]+)://(.*)`,
//      to: 'http://' + ZERO_HOST + '/$1'
//    })
//  ]
//};
chrome.declarativeWebRequest.onRequest.addRules([onRequestTlds, onRequestHosts/*, onRequestSchemes*/]);
