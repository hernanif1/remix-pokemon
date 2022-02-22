var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/hernani/projects/remix-pokemon/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/pages/Error.tsx
init_react();
var import_remix2 = __toModule(require_remix());
function Error2() {
  const caught = (0, import_remix2.useCatch)();
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oops!"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full bg-red-800 flex justify-center items-center text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col text-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "self-center",
    src: "https://user-images.githubusercontent.com/1771727/154727379-53a56d67-4bae-4dd1-bb6e-7b33d9f3852b.png",
    width: 300
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "mb-4 text-7xl font-bold text-center"
  }, "Something went wrong ", /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("p", {
    className: "mb-4 text-5xl font-bold text-center text-red-300"
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "poke-button py-5",
    to: "/"
  }, "go to home"))), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-DJF2YFI6.css";

// route:/Users/hernani/projects/remix-pokemon/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "Pok\xE9 App" };
};
function CatchBoundary() {
  return /* @__PURE__ */ React.createElement(Error2, null);
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/Users/hernani/projects/remix-pokemon/app/routes/pokemons.tsx
var pokemons_exports = {};
__export(pokemons_exports, {
  default: () => Pokemons
});
init_react();
var import_remix4 = __toModule(require_remix());
function Pokemons() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-blue-800 h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex p-3 justify-center"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://user-images.githubusercontent.com/1771727/154697020-c14f2116-ea9a-4787-87a7-0c56f9bc5302.png",
    width: 120
  }))), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route:/Users/hernani/projects/remix-pokemon/app/routes/pokemons/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/api/pokemons.ts
init_react();
var getAllPokemons = async () => {
  try {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon?limit=27").then((response) => response.json());
    const poke = await Promise.all(pokemons.results.map(async ({ url }) => {
      return await fetch(url).then((response) => response.json());
    }));
    return poke;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
var getPokemonById = async (idParam) => {
  const id = parseInt(idParam);
  if (isNaN(id) || id > 151) {
    throw new Response("Not Found", { status: 404 });
  }
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!result.ok) {
    throw new Response("Not Found", { status: 404 });
  }
  return await result.json();
};

// route:/Users/hernani/projects/remix-pokemon/app/routes/pokemons/search.tsx
var loader = async ({ params }) => {
  const pokemon = await getPokemonById(params.id);
  return pokemon;
};
function Search() {
  const pokemon = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 h-full p-10 flex flex-col items-center min-w-min"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "poke-button mb-10",
    to: "/pokemons"
  }, "Back"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white rounded-xl flex flex-col p-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: pokemon.sprites.front_default,
    width: "200",
    height: "200"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold"
  }, pokemon.name), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-10"
  }, "Abilities"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc"
  }, pokemon.abilities.map((item) => /* @__PURE__ */ React.createElement("li", null, item.ability.name))), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-10"
  }, "Forms"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc"
  }, pokemon.forms.map((item) => /* @__PURE__ */ React.createElement("li", null, item.name)))));
}

// route:/Users/hernani/projects/remix-pokemon/app/routes/pokemons/index.tsx
var pokemons_exports2 = {};
__export(pokemons_exports2, {
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_remix6 = __toModule(require_remix());
var loader2 = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonSearchId = url.searchParams.get("id");
  if (pokemonSearchId) {
    const pokemon = await getPokemonById(pokemonSearchId);
    return [pokemon];
  }
  const response = await getAllPokemons();
  return response;
};
function Index() {
  const pokemons = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 p-4 md:p-10 flex flex-col items-center min-w-min"
  }, /* @__PURE__ */ React.createElement(import_remix6.Form, {
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "id",
    placeholder: "Enter an id from 1 until 151",
    className: "border-2 rounded py-3 px-4 mr-2 w-full md:w-auto"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "poke-button mt-2 w-full md:w-auto",
    type: "submit"
  }, "Search")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[340px] md:max-w-none md:w-auto"
  }, pokemons.map((pokemon) => /* @__PURE__ */ React.createElement("div", {
    key: pokemon.name,
    className: "bg-white p-4 rounded-lg text-center flex flex-col min-w-[220px] justify-center items-center w-full md:w-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `/assets/${pokemon.name}.gif`,
    width: 150
  }), /* @__PURE__ */ React.createElement("div", {
    className: "block capitalize mt-8 font-bold"
  }, pokemon.name), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    className: "block poke-button",
    to: `/pokemons/${pokemon.id}`
  }, "details")))));
}

// route:/Users/hernani/projects/remix-pokemon/app/routes/pokemons/$id.tsx
var id_exports = {};
__export(id_exports, {
  default: () => Pokemon,
  loader: () => loader3
});
init_react();
var import_color_thief_react = __toModule(require("color-thief-react"));
var import_react = __toModule(require("react"));
var import_remix7 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var loader3 = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.id, "Expected params.id");
  const pokemon = await getPokemonById(params.id);
  return pokemon;
};
function Pokemon() {
  const pokemon = (0, import_remix7.useLoaderData)();
  const imageURL = `/assets/${pokemon.name}.gif`;
  const { data: color } = (0, import_color_thief_react.useColor)(imageURL, "rgbArray");
  (0, import_react.useEffect)(() => {
    if (color) {
      console.log("color", color);
      document.documentElement.style.setProperty("--mystery-var", color.join(", "));
    }
  }, [color]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 h-full p-10 flex flex-col items-center min-w-min"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    className: "poke-button mb-10",
    to: "/pokemons"
  }, "Back"), /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl p-3 shadow-lg shadow-[color:rgb(var(--mystery-var))]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl  bg-[color:rgb(var(--mystery-var))]  text-white min-w-[250px]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl flex flex-col p-10 bg-gradient-to-t from-black/10"
  }, /* @__PURE__ */ React.createElement("img", {
    id: "avatar",
    src: imageURL,
    width: 150
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold mt-5 capitalize"
  }, pokemon.name), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-10"
  }, "Abilities"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc ml-4"
  }, pokemon.abilities.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.ability.name
  }, item.ability.name))), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-10"
  }, "Forms"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc ml-4"
  }, pokemon.forms.map((item) => /* @__PURE__ */ React.createElement("li", {
    key: item.name
  }, item.name)))))));
}

// route:/Users/hernani/projects/remix-pokemon/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
var import_remix8 = __toModule(require_remix());
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-full bg-red-800 flex justify-center items-center text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center items-center max-w-[600px]"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "p-8",
    src: "https://user-images.githubusercontent.com/1771727/154697020-c14f2116-ea9a-4787-87a7-0c56f9bc5302.png"
  }), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "poke-button mt-0",
    to: "/pokemons"
  }, "Click here")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "6b61975c", "entry": { "module": "/build/entry.client-QNQYH6LC.js", "imports": ["/build/_shared/chunk-6VTNJE2P.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-INARDLXX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZB6HKF6K.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pokemons": { "id": "routes/pokemons", "parentId": "root", "path": "pokemons", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pokemons-Z56IG6NB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pokemons/$id": { "id": "routes/pokemons/$id", "parentId": "routes/pokemons", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pokemons/$id-47TKU736.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pokemons/index": { "id": "routes/pokemons/index", "parentId": "routes/pokemons", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/pokemons/index-A6E3YDIM.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pokemons/search": { "id": "routes/pokemons/search", "parentId": "routes/pokemons", "path": "search", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pokemons/search-ES45PXXP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6B61975C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/pokemons": {
    id: "routes/pokemons",
    parentId: "root",
    path: "pokemons",
    index: void 0,
    caseSensitive: void 0,
    module: pokemons_exports
  },
  "routes/pokemons/search": {
    id: "routes/pokemons/search",
    parentId: "routes/pokemons",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/pokemons/index": {
    id: "routes/pokemons/index",
    parentId: "routes/pokemons",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: pokemons_exports2
  },
  "routes/pokemons/$id": {
    id: "routes/pokemons/$id",
    parentId: "routes/pokemons",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9oZXJuYW5pL3Byb2plY3RzL3JlbWl4LXBva2Vtb24vYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9wYWdlcy9FcnJvci50c3giLCAicm91dGU6L1VzZXJzL2hlcm5hbmkvcHJvamVjdHMvcmVtaXgtcG9rZW1vbi9hcHAvcm91dGVzL3Bva2Vtb25zLnRzeCIsICJyb3V0ZTovVXNlcnMvaGVybmFuaS9wcm9qZWN0cy9yZW1peC1wb2tlbW9uL2FwcC9yb3V0ZXMvcG9rZW1vbnMvc2VhcmNoLnRzeCIsICIuLi9hcHAvYXBpL3Bva2Vtb25zLnRzIiwgInJvdXRlOi9Vc2Vycy9oZXJuYW5pL3Byb2plY3RzL3JlbWl4LXBva2Vtb24vYXBwL3JvdXRlcy9wb2tlbW9ucy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL2hlcm5hbmkvcHJvamVjdHMvcmVtaXgtcG9rZW1vbi9hcHAvcm91dGVzL3Bva2Vtb25zLyRpZC50c3giLCAicm91dGU6L1VzZXJzL2hlcm5hbmkvcHJvamVjdHMvcmVtaXgtcG9rZW1vbi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9oZXJuYW5pL3Byb2plY3RzL3JlbWl4LXBva2Vtb24vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2hlcm5hbmkvcHJvamVjdHMvcmVtaXgtcG9rZW1vbi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2hlcm5hbmkvcHJvamVjdHMvcmVtaXgtcG9rZW1vbi9hcHAvcm91dGVzL3Bva2Vtb25zLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvaGVybmFuaS9wcm9qZWN0cy9yZW1peC1wb2tlbW9uL2FwcC9yb3V0ZXMvcG9rZW1vbnMvc2VhcmNoLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvaGVybmFuaS9wcm9qZWN0cy9yZW1peC1wb2tlbW9uL2FwcC9yb3V0ZXMvcG9rZW1vbnMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9oZXJuYW5pL3Byb2plY3RzL3JlbWl4LXBva2Vtb24vYXBwL3JvdXRlcy9wb2tlbW9ucy8kaWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9oZXJuYW5pL3Byb2plY3RzL3JlbWl4LXBva2Vtb24vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3Bva2Vtb25zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb2tlbW9uc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJwb2tlbW9uc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9rZW1vbnMvc2VhcmNoXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb2tlbW9ucy9zZWFyY2hcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb2tlbW9uc1wiLFxuICAgICAgcGF0aDogXCJzZWFyY2hcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3Bva2Vtb25zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb2tlbW9ucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3Bva2Vtb25zXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvcG9rZW1vbnMvJGlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wb2tlbW9ucy8kaWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9wb2tlbW9uc1wiLFxuICAgICAgcGF0aDogXCI6aWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCJ+L3BhZ2VzL0Vycm9yXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlBva1x1MDBFOSBBcHBcIiB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIHJldHVybiA8RXJyb3IgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIExpbmtzLCBNZXRhLCBTY3JpcHRzLCB1c2VDYXRjaCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvcigpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5Pb3BzITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1yZWQtODAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xNzcxNzI3LzE1NDcyNzM3OS01M2E1NmQ2Ny00YmFlLTRkZDEtYmI2ZS03YjMzZDlmMzg1MmIucG5nXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgU29tZXRoaW5nIHdlbnQgd3JvbmcgPGJyIC8+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1yZWQtMzAwXCI+XG4gICAgICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfSB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJwb2tlLWJ1dHRvbiBweS01XCIgdG89XCIvXCI+XG4gICAgICAgICAgICAgIGdvIHRvIGhvbWVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9ucygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIGgtZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtMyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xNzcxNzI3LzE1NDY5NzAyMC1jMTRmMjExNi1lYTlhLTQ3ODctODdhNy0wYzU2ZjliYzUzMDIucG5nXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0UG9rZW1vbkJ5SWQgfSBmcm9tIFwifi9hcGkvcG9rZW1vbnNcIjtcbmltcG9ydCB7IFBva2Vtb25EZXRhaWxzIH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkgPT4ge1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZ2V0UG9rZW1vbkJ5SWQocGFyYW1zLmlkKTtcbiAgcmV0dXJuIHBva2Vtb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHBva2Vtb24gPSB1c2VMb2FkZXJEYXRhPFBva2Vtb25EZXRhaWxzPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBoLWZ1bGwgcC0xMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtaW4tdy1taW5cIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBva2UtYnV0dG9uIG1iLTEwXCIgdG89XCIvcG9rZW1vbnNcIj5cbiAgICAgICAgQmFja1xuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgZmxleCBmbGV4LWNvbCBwLTEwXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Bva2Vtb24ubmFtZX08L2gxPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEwXCI+QWJpbGl0aWVzPC9oMz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzY1wiPlxuICAgICAgICAgIHtwb2tlbW9uLmFiaWxpdGllcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaT57aXRlbS5hYmlsaXR5Lm5hbWV9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEwXCI+Rm9ybXM8L2gzPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzY1wiPlxuICAgICAgICAgIHtwb2tlbW9uLmZvcm1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGxpPntpdGVtLm5hbWV9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHJlc29sdmVQYXRoIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IHsgUG9rZW1vbkFwaSwgUG9rZW1vbkRldGFpbHMgfSBmcm9tIFwifi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsUG9rZW1vbnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9rZW1vbnM6IFBva2Vtb25BcGkgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTI3XCJcbiAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgY29uc3QgcG9rZTogUG9rZW1vbkRldGFpbHNbXSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgcG9rZW1vbnMucmVzdWx0cy5tYXAoYXN5bmMgKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gcG9rZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQb2tlbW9uQnlJZCA9IGFzeW5jIChpZFBhcmFtOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaWQgPSBwYXJzZUludChpZFBhcmFtKTtcbiAgaWYgKGlzTmFOKGlkKSB8fCBpZCA+IDE1MSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIk5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKTtcblxuICBpZiAoIXJlc3VsdC5vaykge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShcIk5vdCBGb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IHJlc3VsdC5qc29uKCk7XG59O1xuIiwgImltcG9ydCB7IEZvcm0sIExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRBbGxQb2tlbW9ucywgZ2V0UG9rZW1vbkJ5SWQgfSBmcm9tIFwifi9hcGkvcG9rZW1vbnNcIjtcbmltcG9ydCB7IFBva2Vtb25EZXRhaWxzIH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHBva2Vtb25TZWFyY2hJZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XG4gIGlmIChwb2tlbW9uU2VhcmNoSWQpIHtcbiAgICBjb25zdCBwb2tlbW9uOiBQb2tlbW9uRGV0YWlscyA9IGF3YWl0IGdldFBva2Vtb25CeUlkKHBva2Vtb25TZWFyY2hJZCk7XG4gICAgcmV0dXJuIFtwb2tlbW9uXTtcbiAgfVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEFsbFBva2Vtb25zKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBwb2tlbW9ucyA9IHVzZUxvYWRlckRhdGE8UG9rZW1vbkRldGFpbHNbXT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC00IG1kOnAtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWluLXctbWluXCI+XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJweS01XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiaWRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gaWQgZnJvbSAxIHVudGlsIDE1MVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZCBweS0zIHB4LTQgbXItMiB3LWZ1bGwgbWQ6dy1hdXRvXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb2tlLWJ1dHRvbiBtdC0yIHctZnVsbCBtZDp3LWF1dG9cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU2VhcmNoXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTEwIHctZnVsbCBtYXgtdy1bMzQwcHhdIG1kOm1heC13LW5vbmUgbWQ6dy1hdXRvXCI+XG4gICAgICAgIHtwb2tlbW9ucy5tYXAoKHBva2Vtb24pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3Bva2Vtb24ubmFtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHRleHQtY2VudGVyIGZsZXggZmxleC1jb2wgbWluLXctWzIyMHB4XSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG1kOnctYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvYXNzZXRzLyR7cG9rZW1vbi5uYW1lfS5naWZgfSB3aWR0aD17MTUwfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBjYXBpdGFsaXplIG10LTggZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIHtwb2tlbW9uLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJsb2NrIHBva2UtYnV0dG9uXCIgdG89e2AvcG9rZW1vbnMvJHtwb2tlbW9uLmlkfWB9PlxuICAgICAgICAgICAgICBkZXRhaWxzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ29sb3IgfSBmcm9tIFwiY29sb3ItdGhpZWYtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IGdldFBva2Vtb25CeUlkIH0gZnJvbSBcIn4vYXBpL3Bva2Vtb25zXCI7XG5pbXBvcnQgeyBQb2tlbW9uRGV0YWlscyB9IGZyb20gXCJ+L3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyBwYXJhbXMgfTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5pZCwgXCJFeHBlY3RlZCBwYXJhbXMuaWRcIik7XG4gIGNvbnN0IHBva2Vtb246IFBva2Vtb25EZXRhaWxzID0gYXdhaXQgZ2V0UG9rZW1vbkJ5SWQocGFyYW1zLmlkKTtcbiAgcmV0dXJuIHBva2Vtb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uKCkge1xuICBjb25zdCBwb2tlbW9uID0gdXNlTG9hZGVyRGF0YTxQb2tlbW9uRGV0YWlscz4oKTtcbiAgY29uc3QgaW1hZ2VVUkwgPSBgL2Fzc2V0cy8ke3Bva2Vtb24ubmFtZX0uZ2lmYDtcbiAgY29uc3QgeyBkYXRhOiBjb2xvciB9ID0gdXNlQ29sb3IoaW1hZ2VVUkwsIFwicmdiQXJyYXlcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29sb3JcIiwgY29sb3IpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tbXlzdGVyeS12YXJcIixcbiAgICAgICAgY29sb3Iuam9pbihcIiwgXCIpXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2NvbG9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGgtZnVsbCBwLTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi13LW1pblwiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwicG9rZS1idXR0b24gbWItMTBcIiB0bz1cIi9wb2tlbW9uc1wiPlxuICAgICAgICBCYWNrXG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBwLTMgc2hhZG93LWxnIHNoYWRvdy1bY29sb3I6cmdiKHZhcigtLW15c3RlcnktdmFyKSldXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCAgYmctW2NvbG9yOnJnYih2YXIoLS1teXN0ZXJ5LXZhcikpXSAgdGV4dC13aGl0ZSBtaW4tdy1bMjUwcHhdXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgcC0xMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2svMTBcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJhdmF0YXJcIiBzcmM9e2ltYWdlVVJMfSB3aWR0aD17MTUwfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC01IGNhcGl0YWxpemVcIj57cG9rZW1vbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC0xMFwiPkFiaWxpdGllczwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTRcIj5cbiAgICAgICAgICAgICAge3Bva2Vtb24uYWJpbGl0aWVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uYWJpbGl0eS5uYW1lfT57aXRlbS5hYmlsaXR5Lm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTEwXCI+Rm9ybXM8L2gzPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTRcIj5cbiAgICAgICAgICAgICAge3Bva2Vtb24uZm9ybXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5uYW1lfT57aXRlbS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1yZWQtODAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWF4LXctWzYwMHB4XVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC04XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8xNzcxNzI3LzE1NDY5NzAyMC1jMTRmMjExNi1lYTlhLTQ3ODctODdhNy0wYzU2ZjliYzUzMDIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwicG9rZS1idXR0b24gbXQtMFwiIHRvPVwiL3Bva2Vtb25zXCI+XG4gICAgICAgICAgQ2xpY2sgaGVyZVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic2YjYxOTc1YycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUU5RWUg2TEMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTZWVE5KRTJQLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1JTkFSRExYWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtWkI2SEtGNksuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb2tlbW9ucyc6eydpZCc6J3JvdXRlcy9wb2tlbW9ucycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidwb2tlbW9ucycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wb2tlbW9ucy1aNTZJRzZOQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3Bva2Vtb25zLyRpZCc6eydpZCc6J3JvdXRlcy9wb2tlbW9ucy8kaWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9wb2tlbW9ucycsJ3BhdGgnOic6aWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcG9rZW1vbnMvJGlkLTQ3VEtVNzM2LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb2tlbW9ucy9pbmRleCc6eydpZCc6J3JvdXRlcy9wb2tlbW9ucy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3Bva2Vtb25zJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bva2Vtb25zL2luZGV4LUE2RTNZRElNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wb2tlbW9ucy9zZWFyY2gnOnsnaWQnOidyb3V0ZXMvcG9rZW1vbnMvc2VhcmNoJywncGFyZW50SWQnOidyb3V0ZXMvcG9rZW1vbnMnLCdwYXRoJzonc2VhcmNoJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3Bva2Vtb25zL3NlYXJjaC1FUzQ1UFhYUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTZCNjE5NzVDLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7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
