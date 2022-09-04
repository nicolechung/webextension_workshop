## Popup

![popup](src/assets/popup.png)

## Installation

```
yarn
```

## Cleaning

```
yarn clean:dist
```

This will delete the `dist` folder.

## Development mode

```
// start for manifest version 2
yarn start:v2

// start for manifest version 3
yarn start:v3
```

This mode will work in both Chrome and Firefox.

BUT, once you start using `browser` you won't be able to develop in localhost. It will error out.

Note: it seems like you can make changes, but you'll have to disregard "🚨 Connection to the HMR server was lost" errors in Chrome. Parcel will handle the "reloading" for you.

:lightbulb: This builds into `dist/webext-dev`!

## Build mode

```
// build for manifest version 2
yarn build:v2

// build for manifest version 3
yarn build:v3
```

:lightbulb: This builds into `dist/webext-prod`!

## manifest versions

To use manifest version 3 in firefox, you have to enable some experimental flags by going to `about:config`:

- `extensions.manifestV3.enabled` to `true`
- `xpinstall.signatures.required` to `false`

## Attribution

### cat and dog images

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## image icon

<div>Icons made by <a href="https://www.flaticon.com/authors/phoenix-group" title="Phoenix Group">Phoenix Group</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
