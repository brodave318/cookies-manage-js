# cookies-manage-js
Lightweight, simple and easy cookie management library in javascript
https://img.shields.io/packagist/l/doctrine/orm.svg 
https://img.shields.io/pypi/status/Dj.svg
This is a library for providing more useful and powerful interface to manage your cookies.
- No Dependency
- Supports AMD, CommonJS and Node modules
- Lightweight 1 KB
- Supported by all browsers


## Installation
Download the `cookies-manage.min.js` and include in your project.

```html
<script src="coockies-manage.min.js"></script>
```

## Usage
After include the `cookie-manager.min.js`, you will be able to use `CookieManager` object.

You can also load `CookieManager` object as an AMD, CommonJS, or Node module.


## Functionalities

### Creating a Cookie

Creating a new cookie

```js
   CookieManager.set(name, value, expires, domain, path, secure);
```

- `name (String)` cookie name
- `value (String)` cookie value
- `expires (Optional) (Number)` cookie expiration in days
- `domain (Optional) (String)` cookie domain
- `path (Optional) (String)` cookie path
- `secure (Optional) (Boolean)` cookie ssl support flag


### Retrieving a Cookie

Getting a cookie wuth given cookie name

```js
   CookieManager.get(name);
```

- `name (String)` cookie name


### Updating a Cookie

Updating an existing cookie

```js
   CookieManager.update(name, value, expires, domain, path, secure);
```

- `name (String)` cookie name
- `value (String)` cookie value
- `expires (Optional) (Number)` cookie expiration in days
- `domain (Optional) (String)` cookie domain
- `path (Optional) (String)` cookie path
- `secure (Optional) (Boolean)` cookie ssl support flag


### Deleting a Cookie

Deleting a cookie wuth given cookie name

```js
   CookieManager.remove(name);
```

- `name (String)` cookie name


### Listing All Cookies

### Clearing All Cookies
