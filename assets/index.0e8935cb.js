var isLocalhost = function() {
  return Boolean(
    window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
};
var waitWindowLoad;
if (typeof window !== "undefined") {
  if (typeof Promise !== "undefined") {
    waitWindowLoad = new Promise(function(resolve) {
      return window.addEventListener("load", resolve);
    });
  } else {
    waitWindowLoad = { then: function(cb) {
      return window.addEventListener("load", cb);
    } };
  }
}
function register(swUrl, hooks) {
  if (hooks === void 0)
    hooks = {};
  var registrationOptions = hooks.registrationOptions;
  if (registrationOptions === void 0)
    registrationOptions = {};
  delete hooks.registrationOptions;
  var emit2 = function(hook) {
    var args = [], len = arguments.length - 1;
    while (len-- > 0)
      args[len] = arguments[len + 1];
    if (hooks && hooks[hook]) {
      hooks[hook].apply(hooks, args);
    }
  };
  if ("serviceWorker" in navigator) {
    waitWindowLoad.then(function() {
      if (isLocalhost()) {
        checkValidServiceWorker(swUrl, emit2, registrationOptions);
        navigator.serviceWorker.ready.then(function(registration) {
          emit2("ready", registration);
        }).catch(function(error) {
          return handleError(emit2, error);
        });
      } else {
        registerValidSW(swUrl, emit2, registrationOptions);
        navigator.serviceWorker.ready.then(function(registration) {
          emit2("ready", registration);
        }).catch(function(error) {
          return handleError(emit2, error);
        });
      }
    });
  }
}
function handleError(emit2, error) {
  if (!navigator.onLine) {
    emit2("offline");
  }
  emit2("error", error);
}
function registerValidSW(swUrl, emit2, registrationOptions) {
  navigator.serviceWorker.register(swUrl, registrationOptions).then(function(registration) {
    emit2("registered", registration);
    if (registration.waiting) {
      emit2("updated", registration);
      return;
    }
    registration.onupdatefound = function() {
      emit2("updatefound", registration);
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function() {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            emit2("updated", registration);
          } else {
            emit2("cached", registration);
          }
        }
      };
    };
  }).catch(function(error) {
    return handleError(emit2, error);
  });
}
function checkValidServiceWorker(swUrl, emit2, registrationOptions) {
  fetch(swUrl).then(function(response) {
    if (response.status === 404) {
      emit2("error", new Error("Service worker not found at " + swUrl));
      unregister();
    } else if (response.headers.get("content-type").indexOf("javascript") === -1) {
      emit2("error", new Error(
        "Expected " + swUrl + " to have javascript content-type, but received " + response.headers.get("content-type")
      ));
      unregister();
    } else {
      registerValidSW(swUrl, emit2, registrationOptions);
    }
  }).catch(function(error) {
    return handleError(emit2, error);
  });
}
function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.unregister();
    }).catch(function(error) {
      return handleError(emit, error);
    });
  }
}
export { register, unregister };
