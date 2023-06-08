
# Install dependencies

```
$ yarn
```

# Start local server

```sh
$ yarn docs:dev
```

For some environments there could be an error:

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

For workaround you can use

```sh
$ export NODE_OPTIONS=--openssl-legacy-provider
```

before starting dev server.

# Static assets

```sh
$ yarn docs:build
```

# Deploy to docs.tuxcare.com

## With no change in the theme 
Create pull request to merge the changes. If pull request is approved and merged just wait a few minutes. 
The changes will be released automatically.

## With the theme changed
Run 
```sh
$ yarn docs:build
```
to update the theme version in `yarn.lock` file. Then do the rest by instructions above   

