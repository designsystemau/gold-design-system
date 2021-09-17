@gold.au/animate CHANGELOG

## 1.0.15

### Patch Changes

- # 55453e2d: Bump pancake to @gold.au

> Part of the [gold.au components](https://github.com/designsystemau/gold-design-system/) ecosystem.

## Contents

- [Versions](#install)
- [Release History](#release-history)

---

## Versions

- [v1.0.14 - Fix unsafe-eval CSP issue](#v1014)
- [v1.0.13 - Remove --save-dev flag from readme instructions](#v1013)
- [v1.0.12 - Removed uikit references](#v1012)
- [v1.0.11 - Update dependencies](#v1011)
- [v1.0.10 - Update dependencies](#v1010)
- [v1.0.9 - Update browser-sync dependency](#v109)
- [v1.0.8 - Update dependencies](#v108)
- [v1.0.7 - Fixing bug where openSize of 0 gets turned into auto](#v107)
- [v1.0.6 - Removing web pack dev server, updating dependencies](#v106)
- [v1.0.5 - Fixed build scripts for Windows](#v105)
- [v1.0.4 - Change npm run watch browser-sync location](#v104)
- [v1.0.3 - Update dependencies](#v103)
- [v1.0.2 - Fix typo in homepage link](#v102)
- [v1.0.1 - Changing homepage link](#v101)
- [v1.0.0 - Moved to AU namespace, fixed export](#v100)
- [v0.1.5 - Fixed pancake config](#v015)
- [v0.1.4 - Pinned pancake plugins](#v014)
- [v0.1.3 - Exposed GetCSSPropertyBecauseIE publicly, added prefunction, postfunction](#v013)
- [v0.1.2 - Removed core as dependency](#v012)
- [v0.1.1 - 💥 Initial version](#v011)

---

## Release History

### v1.0.14

- Remove eval call from animate module

### v1.0.13

- Remove --save-dev flag from readme instructions

### v1.0.12

- Removed uikit references

### v1.0.11

- Update dependencies

### v1.0.10

- Update dependencies

### v1.0.9

- Update browser-sync dependency

### v1.0.8

- Update dependencies

### v1.0.7

- Fixing bug where openSize of 0 gets turned into auto

### v1.0.6

- Removing web pack dev server, updating dependencies

### v1.0.5

- Fixed build scripts for Windows

### v1.0.4

- Change npm run watch browser-sync location

### v1.0.3

- Update dependencies

### v1.0.2

- Fix typo in homepage link

### v1.0.1

- Changing homepage link

### v1.0.0

- Moved to AU namespace
- fixed export so that you now can import animate from node_modules directly

### v0.1.5

- Fixed pancake config

### v0.1.4

- Pinned `pancake-js` and `pancake-sass` to avoid issues with caching in continues integration

### v0.1.3

- `GetCSSPropertyBecauseIE` is now part of the public API so we can reuse it in other modules
- We added a `prefunction` and `postfunction` key to the settings object of toggle. These functions will run before and after each animation and passes two
  things, the element and the direction of the animation. This is great if you want to change classes on animation and don’t want to have to find out what
  direction the toggle is going.

### v0.1.2

- Removed core as dependency

### v0.1.1

- 💥 Initial version

**[⬆ back to top](#contents)**

# };
