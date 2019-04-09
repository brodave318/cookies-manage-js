/**
 *
 *
 * cookies-manage.js
 * simple, easy and lightweight cookie management library
 * 04.08.2019 - version 1.0
 * {REPO URL}
 *
 * Copyright 2019 David Hernandez <brodave318u@gmail.com>
 * Released under MIT License
 * {LICENSE URL}
 *
 *
 */
(function(window, document) {
  "user strict";
  const CookieManager = {
    /**
     * Create cookie with given parameters
     * @param {String} name
     * @param {String} value
     * @param {Number} [expires] - expiration in days
     * @param {String} [domain]
     * @param {String} [path]
     * @param {Boolean} [secure] - ssl flag
     */

    set: function(name, value, expires, domain, path, secure) {
      let cookieStr = name + "=" + value;

      if (expires) {
        const now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ";" + "expires=" + now.toUTCString();
      }

      if (domain) {
        cookieStr += ";" + "domain=" + domain;
      }

      if (path) {
        cookieStr += ";" + "path=" + path;
      }

      if (secure) {
        cookieStr += ";" + "secure";
      }

      // Create Cookie
      document.cookie = cookieStr;
    },

    /**
     * Retrieve the cookie value with given cookie name
     * @param {String} name
     */
    get: function(name) {
      const cookies = document.cookie.split(";").map(function(cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];
        const value = cookie[1];

        if (key === name) {
          return value;
        }
      }

      return undefined;
    },

    /**
     *
     * Update cookie with given parameters
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolean} [secure] cookie ssl flag
     *
     */
    update: function(name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },

    /**
     *
     * Remove cookie with given cookie name
     * @param {String} name cookie name
     *
     */
    remove: function(name) {
      this.set(name, "", -1);
    },
    /**
     * Retrieve all cookies
     */
    getAll: function() {
      const cookies = document.cookie.split(";").map(function(cookie) {
        return cookie.trim();
      });

      const cookiesList = [];

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];
        const value = cookie[1];
        cookiesList.push({ key: key, value: value });
      }

      return cookiesList;
    },
    /**
     * Clear all cookies
     */
    clear: function() {
      const cookies = document.cookie.split(";").map(function(cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const key = cookie[0];
        const value = cookie[1];
        this.remove(key);
      }
    }
  };

  // AMD support
  if (typeof define === "function" && define.amd) {
    define(function() {
      return CookieManager;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== "undefined") {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = CookieManager;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.CookieManager = CookieManager;
  } else {
    window.CookieManager = CookieManager;
  }
})(window, document);
