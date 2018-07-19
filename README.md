# Declarative ZeroNet Protocol

Declarative ZeroNet Protocol is a Chrome extension that allows you to browse ZeroNet websites without [127.0.0.1:43110](http://127.0.0.1:43110), and redirects you to 127.0.0.1:43110 from .bit and .zero domains.

This extension is a fork of [ZeroNerds/zeronet-protocol-crx](https://github.com/ZeroNerds/zeronet-protocol-crx) which is itself a fork of [goldenratio/zeronet-protocol-crx](https://github.com/goldenratio/zeronet-protocol-crx).
The extension is meant to be more performant and less resource-heavy than its counterparts, using Chrome's [`declarativeWebRequest`](https://developer.chrome.com/extensions/declarativeWebRequest) APIs to intercept requests. It does not use a persistent background page.

**This extension only works on Dev/Beta versions of Chrome/Chromium, and might cease to work if the Chrome team decides to [remove](https://bugs.chromium.org/p/chromium/issues/detail?id=586636) the `chrome.declarativeWebRequest` APIs.**

## Demo
After installing this extension, visit:

[http://zero/1EU1tbG9oC1A8jz2ouVwGZyQ5asrNsE4Vr](http://zero/1EU1tbG9oC1A8jz2ouVwGZyQ5asrNsE4Vr)

[http://zero/1GamESVFyJfkmbxtcrLR2VX4m4VFmwyeRY](http://zero/1GamESVFyJfkmbxtcrLR2VX4m4VFmwyeRY)

[http://board.zeronetwork.bit/](http://board.zeronetwork.bit/)

[http://127.0.0.1:43110/0list.bit/](http://127.0.0.1:43110/0list.bit/)

[http://127.0.0.1:43110/1Gif7PqWTzVWDQ42Mo7np3zXmGAo3DXc7h](http://127.0.0.1:43110/1Gif7PqWTzVWDQ42Mo7np3zXmGAo3DXc7h)

## Installation

1. Download the extension `git clone https://github.com/uwx/zeronet-protocol-crx.git`
2. Visit chrome://extensions in your browser
3. Ensure that the Developer Mode checkbox in the top right-hand corner is checked.
4. Click 'Load unpacked extension…' to pop up a file-selection dialog.
5. Navigate to the directory in which your extension files live, and select it.

## Planned features
This extension is not actively developed, but pull requests are welcome. Potential future features include support for the `zero://` protocol, configurable ZeroNet host and configurable replacements (for example, for ZeroNet proxies)
