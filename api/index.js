var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 89,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/picker.css
var picker_default = "/build/_assets/picker-OWKB62MX.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZWJ4JVVM.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  // { rel: "stylesheet", href: cssBundleHref },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: picker_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/admin.$model.tsx
var admin_model_exports = {};
__export(admin_model_exports, {
  action: () => action,
  default: () => AdminModelPage,
  loader: () => loader,
  pageFunction: () => pageFunction
});

// app/components/combobox.tsx
var import_react3 = require("@headlessui/react"), import_solid = require("@heroicons/react/20/solid"), import_react4 = require("react");

// app/utils/helper.ts
var import_remix_auth2 = require("remix-auth");

// app/utils/auth.server.ts
var import_remix_auth = require("remix-auth"), import_remix_auth_form = require("remix-auth-form");

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
});

// app/utils/auth.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// utils/xata.ts
var import_client = require("@xata.io/client"), tables = [
  {
    name: "Tag",
    columns: [
      { name: "label", type: "string", unique: !0 },
      { name: "color", type: "link", link: { table: "Color" } }
    ]
  },
  {
    name: "User",
    columns: [
      { name: "email", type: "email", unique: !0 },
      { name: "password", type: "string" }
    ]
  },
  {
    name: "Location",
    columns: [
      { name: "name", type: "string", unique: !0 },
      { name: "description", type: "string" }
    ]
  },
  {
    name: "ActivityBooking",
    columns: [
      { name: "datetime", type: "datetime" },
      {
        name: "isFixedDate",
        type: "bool",
        notNull: !0,
        defaultValue: "false"
      },
      {
        name: "activity",
        type: "link",
        link: { table: "AcitivityDescription" }
      }
    ]
  },
  {
    name: "AcivityTag",
    columns: [
      { name: "tag", type: "link", link: { table: "Tag" } },
      { name: "activity", type: "link", link: { table: "ActivityBooking" } }
    ]
  },
  {
    name: "Vacation",
    columns: [
      {
        name: "name",
        type: "string",
        notNull: !0,
        defaultValue: "My Vacation"
      },
      { name: "user", type: "link", link: { table: "User" } },
      {
        name: "startDate",
        type: "datetime",
        notNull: !0,
        defaultValue: "now"
      },
      { name: "endDate", type: "datetime", notNull: !0, defaultValue: "now" },
      { name: "description", type: "text" },
      { name: "location", type: "link", link: { table: "Location" } }
    ]
  },
  {
    name: "VacationActivity",
    columns: [
      { name: "vacation", type: "link", link: { table: "Vacation" } },
      { name: "activity", type: "link", link: { table: "ActivityBooking" } }
    ]
  },
  { name: "Color", columns: [{ name: "name", type: "string", unique: !0 }] },
  {
    name: "AcitivityDescription",
    columns: [
      { name: "name", type: "string", unique: !0 },
      { name: "description", type: "string" }
    ]
  }
], DatabaseClient = (0, import_client.buildClient)(), defaultOptions = {
  databaseURL: "https://Jannik-Wienecke-s-workspace-hebkta.eu-west-1.xata.sh/db/reiseathleten"
}, XataClient = class extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}, instance, getXataClient = () => instance || (instance = new XataClient(), instance);

// app/utils/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage);
authenticator.use(
  new import_remix_auth_form.FormStrategy(async ({ form }) => {
    let email = form.get("email"), password = form.get("password"), user = await getXataClient().db.User.filter({ email }).getFirst();
    if (!user)
      throw console.error("wrong email"), new import_remix_auth.AuthorizationError();
    if (!await import_bcryptjs.default.compare(
      password,
      user.password
    ))
      throw new import_remix_auth.AuthorizationError();
    return user;
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "form"
);

// app/utils/helper.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"));
var isLoggedIn = async (request, options) => await authenticator.isAuthenticated(
  request,
  options || {}
), authenticate = async (request) => {
  console.log("authenticate"), await authenticator.authenticate("form", request, {
    successRedirect: "/vacation",
    // failureRedirect: "/signup",
    throwOnError: !0
  });
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var getCurrentDateString = () => {
  let currentDate = /* @__PURE__ */ new Date(), parsedValues = [
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate(),
    currentDate.getHours(),
    currentDate.getMinutes()
  ].map((v) => v < 10 ? `0${v}` : v), [year, month, day, hours, minutes] = parsedValues;
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// app/components/combobox.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ComboBox = ({
  items,
  onSelect,
  onQueryChange
}) => {
  let [query, setQuery] = (0, import_react4.useState)(""), [selectedItem, setSelectedItem] = (0, import_react4.useState)(), filteredItems = query === "" ? items : items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), handleChangeItem = (item) => {
    setSelectedItem(item), onSelect(item);
  }, handleQueryChange = (query2) => {
    setQuery(query2), onQueryChange == null || onQueryChange(query2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Combobox, { as: "div", value: selectedItem, onChange: handleChangeItem, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Combobox.Label, { className: "block text-sm font-medium leading-6 text-gray-900", children: "Assigned to" }, void 0, !1, {
      fileName: "app/components/combobox.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react3.Combobox.Input,
        {
          className: "w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
          onChange: (event) => handleQueryChange(event.target.value),
          displayValue: (item) => item == null ? void 0 : item.name,
          value: selectedItem == null ? void 0 : selectedItem.name,
          name: selectedItem == null ? void 0 : selectedItem.name
        },
        void 0,
        !1,
        {
          fileName: "app/components/combobox.tsx",
          lineNumber: 55,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Combobox.Button, { className: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_solid.ChevronUpDownIcon,
        {
          className: "h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/combobox.tsx",
          lineNumber: 63,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/combobox.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      filteredItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Combobox.Options, { className: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: filteredItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react3.Combobox.Option,
        {
          value: item,
          className: ({ active }) => classNames(
            "relative cursor-default select-none py-2 pl-8 pr-4",
            active ? "bg-indigo-600 text-white" : "text-gray-900"
          ),
          children: ({ active, selected }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [
              item != null && item.color ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "span",
                {
                  className: classNames(
                    "inline-block h-2 w-2 flex-shrink-0 rounded-full mr-2"
                  ),
                  style: {
                    backgroundColor: item.color
                  },
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/combobox.tsx",
                  lineNumber: 86,
                  columnNumber: 27
                },
                this
              ) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "span",
                {
                  className: classNames(
                    "truncate",
                    selected ? "font-semibold" : ""
                  ),
                  children: item.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/combobox.tsx",
                  lineNumber: 97,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/combobox.tsx",
              lineNumber: 84,
              columnNumber: 23
            }, this),
            selected && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "span",
              {
                className: classNames(
                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                  active ? "text-white" : "text-indigo-600"
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_solid.CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/components/combobox.tsx",
                  lineNumber: 114,
                  columnNumber: 27
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/combobox.tsx",
                lineNumber: 108,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/combobox.tsx",
            lineNumber: 83,
            columnNumber: 21
          }, this)
        },
        item.id,
        !1,
        {
          fileName: "app/components/combobox.tsx",
          lineNumber: 72,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/combobox.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/combobox.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/combobox.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/combobox.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};

// app/components/form.tsx
var import_react5 = require("@remix-run/react"), import_solid2 = require("@heroicons/react/24/solid"), import_react6 = require("@remix-run/react"), import_react7 = __toESM(require("react"));
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Form({
  title,
  children,
  description,
  SaveButton: SaveButton3,
  onCancel,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-y-10 divide-y divide-gray-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-x-8 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: title }, void 0, !1, {
        fileName: "app/components/form.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: description || "Update Model Information" }, void 0, !1, {
        fileName: "app/components/form.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/form.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react6.Form,
      {
        ...props,
        method: "POST",
        className: "bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-4 py-6 sm:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-2xl gap-x-6 gap-y-8 flex flex-col", children }, void 0, !1, {
            fileName: "app/components/form.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/form.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8", children: [
            SaveButton3,
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "button",
              {
                onClick: onCancel,
                type: "button",
                className: "text-sm font-semibold leading-6 text-gray-900",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/components/form.tsx",
                lineNumber: 47,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/form.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/form.tsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/form.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var DefaultInput = ({
  label,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${props.hidden ? "hidden" : ""}`, children: [
  label ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "label",
    {
      htmlFor: "first-name",
      className: "block text-sm font-medium leading-6 text-gray-900",
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/components/form.tsx",
      lineNumber: 75,
      columnNumber: 9
    },
    this
  ) : null,
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "input",
    {
      ...props,
      className: `${props.error ? "focus:ring-red-600" : "focus:ring-indigo-600"} block w-full pl-4 rounded-md border-[1px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${props.hidden ? "hidden" : ""} ${props.error ? "border-red-600 border-[1px]" : ""}}`
    },
    void 0,
    !1,
    {
      fileName: "app/components/form.tsx",
      lineNumber: 83,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this),
  props.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: props.error }, void 0, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 94,
    columnNumber: 9
  }, this) : null
] }, void 0, !0, {
  fileName: "app/components/form.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this), ImageInput = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "label",
    {
      htmlFor: "cover-photo",
      className: "block text-sm font-medium leading-6 text-gray-900",
      children: "Cover photo"
    },
    void 0,
    !1,
    {
      fileName: "app/components/form.tsx",
      lineNumber: 105,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_solid2.PhotoIcon,
      {
        className: "mx-auto h-12 w-12 text-gray-300",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/components/form.tsx",
        lineNumber: 113,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "label",
        {
          htmlFor: "file-upload",
          className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Upload a file" }, void 0, !1, {
              fileName: "app/components/form.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "file-upload",
                name: "file-upload",
                type: "file",
                className: "sr-only"
              },
              void 0,
              !1,
              {
                fileName: "app/components/form.tsx",
                lineNumber: 123,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/form.tsx",
          lineNumber: 118,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, !1, {
        fileName: "app/components/form.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/form.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xs leading-5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/form.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/form.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/form.tsx",
  lineNumber: 104,
  columnNumber: 5
}, this), SaveButton = ({
  label,
  isLoading
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "button",
  {
    type: "submit",
    className: "rounded-md bg-indigo-600 items-center flex flex-row gap-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    children: [
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          role: "status",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." }, void 0, !1, {
            fileName: "app/components/form.tsx",
            lineNumber: 158,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/form.tsx",
          lineNumber: 154,
          columnNumber: 9
        },
        this
      ) : null,
      label
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/form.tsx",
    lineNumber: 149,
    columnNumber: 5
  },
  this
), Select = ({
  name,
  defaultOptions: defaultOptions2,
  onSelect
}) => {
  var _a, _b;
  let fetcher = (0, import_react5.useFetcher)(), [selected, setSelected] = import_react7.default.useState(null), handleSelect = (item) => {
    console.log(`Selected ${item.name}`), setSelected(item);
  }, fetchPeople = (query) => {
    fetcher.submit({ query, name }, { method: "get", action: "/api/options" });
  }, timeoutRef = import_react7.default.useRef(null), handleQueryChange = (query) => {
    timeoutRef.current !== null && clearTimeout(timeoutRef.current), timeoutRef.current = window.setTimeout(() => {
      fetchPeople(query), clearTimeout(timeoutRef.current);
    }, 300);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name, type: "hidden", value: (selected == null ? void 0 : selected.id) || "" }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/form.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      ComboBox,
      {
        items: (_a = fetcher.data) != null && _a.items ? ((_b = fetcher.data) == null ? void 0 : _b.items) || [] : defaultOptions2 || [],
        onSelect: handleSelect,
        onQueryChange: handleQueryChange
      },
      void 0,
      !1,
      {
        fileName: "app/components/form.tsx",
        lineNumber: 213,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/form.tsx",
    lineNumber: 208,
    columnNumber: 5
  }, this);
};
Form.ImageInput = ImageInput;
Form.DefaultInput = DefaultInput;
Form.SaveButton = SaveButton;
Form.Select = Select;

// app/components/notification.tsx
var import_react8 = require("@headlessui/react"), import_solid3 = require("@heroicons/react/20/solid"), import_outline = require("@heroicons/react/24/outline"), import_react9 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Notification({
  message,
  isError,
  subMessage,
  onClose,
  isOpen
}) {
  let [show, setShow] = (0, import_react9.useState)(isOpen ?? !1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      "aria-live": "assertive",
      className: "pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-full flex-col items-center space-y-4 sm:items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_react8.Transition,
        {
          show,
          as: import_react9.Fragment,
          enter: "transform ease-out duration-300 transition",
          enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-shrink-0", children: isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_solid3.XMarkIcon,
              {
                className: "h-6 w-6 text-red-400",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/notification.tsx",
                lineNumber: 53,
                columnNumber: 23
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              import_outline.CheckCircleIcon,
              {
                className: "h-6 w-6 text-green-400",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/notification.tsx",
                lineNumber: 48,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/notification.tsx",
              lineNumber: 46,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-3 w-0 flex-1 pt-0.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: message }, void 0, !1, {
                fileName: "app/components/notification.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: subMessage }, void 0, !1, {
                fileName: "app/components/notification.tsx",
                lineNumber: 63,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/notification.tsx",
              lineNumber: 59,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ml-4 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "button",
              {
                type: "button",
                className: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                onClick: () => {
                  onClose == null || onClose(), setShow(!1);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
                    fileName: "app/components/notification.tsx",
                    lineNumber: 71,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_solid3.XMarkIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/components/notification.tsx",
                    lineNumber: 72,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/notification.tsx",
                lineNumber: 66,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/notification.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/notification.tsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/notification.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/notification.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/notification.tsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/notification.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/notification.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/notification.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/layout.tsx
var import_react10 = require("react"), import_react11 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_solid4 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), navigation = [
  { name: "Dashboard", href: "#", icon: import_outline2.HomeIcon, current: !0 },
  { name: "Team", href: "#", icon: import_outline2.UsersIcon, current: !1 },
  { name: "Projects", href: "#", icon: import_outline2.FolderIcon, current: !1 },
  { name: "Calendar", href: "#", icon: import_outline2.CalendarIcon, current: !1 },
  { name: "Documents", href: "#", icon: import_outline2.DocumentDuplicateIcon, current: !1 },
  { name: "Reports", href: "#", icon: import_outline2.ChartPieIcon, current: !1 }
], teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: !1 },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: !1 },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: !1 }
], userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" }
];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Layout({ children }) {
  let [sidebarOpen, setSidebarOpen] = (0, import_react10.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Transition.Root, { show: sidebarOpen, as: import_react10.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react11.Dialog,
      {
        as: "div",
        className: "relative z-50 lg:hidden",
        onClose: setSidebarOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react11.Transition.Child,
            {
              as: import_react10.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 71,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_react11.Transition.Child,
            {
              as: import_react10.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_react11.Transition.Child,
                  {
                    as: import_react10.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "-m-2.5 p-2.5",
                        onClick: () => setSidebarOpen(!1),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, !1, {
                            fileName: "app/components/layout.tsx",
                            lineNumber: 100,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                            import_outline2.XMarkIcon,
                            {
                              className: "h-6 w-6 text-white",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout.tsx",
                              lineNumber: 101,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 95,
                        columnNumber: 23
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 94,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 85,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                      alt: "Your Company"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 111,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 110,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "a",
                      {
                        href: item.href,
                        className: classNames2(
                          item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                            item.icon,
                            {
                              className: "h-6 w-6 shrink-0",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout.tsx",
                              lineNumber: 132,
                              columnNumber: 35
                            },
                            this
                          ),
                          item.name
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 123,
                        columnNumber: 33
                      },
                      this
                    ) }, item.name, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 122,
                      columnNumber: 31
                    }, this)) }, void 0, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 120,
                      columnNumber: 27
                    }, this) }, void 0, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 119,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Your teams" }, void 0, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 143,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "-mx-2 mt-2 space-y-1", children: teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "a",
                        {
                          href: team.href,
                          className: classNames2(
                            team.current ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white", children: team.initial }, void 0, !1, {
                              fileName: "app/components/layout.tsx",
                              lineNumber: 158,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, !1, {
                              fileName: "app/components/layout.tsx",
                              lineNumber: 161,
                              columnNumber: 35
                            }, this)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/components/layout.tsx",
                          lineNumber: 149,
                          columnNumber: 33
                        },
                        this
                      ) }, team.name, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 148,
                        columnNumber: 31
                      }, this)) }, void 0, !1, {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 146,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 142,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                            import_outline2.Cog6ToothIcon,
                            {
                              className: "h-6 w-6 shrink-0",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/layout.tsx",
                              lineNumber: 172,
                              columnNumber: 29
                            },
                            this
                          ),
                          "Settings"
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/components/layout.tsx",
                        lineNumber: 168,
                        columnNumber: 27
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 167,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 118,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 117,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 109,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layout.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 75,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/layout.tsx",
        lineNumber: 57,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "img",
        {
          className: "h-8 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/components/layout.tsx",
          lineNumber: 193,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: item.href,
            className: classNames2(
              item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                item.icon,
                {
                  className: "h-6 w-6 shrink-0",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 214,
                  columnNumber: 27
                },
                this
              ),
              item.name
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 205,
            columnNumber: 25
          },
          this
        ) }, item.name, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 204,
          columnNumber: 23
        }, this)) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 202,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 201,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Your teams" }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "-mx-2 mt-2 space-y-1", children: teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "a",
            {
              href: team.href,
              className: classNames2(
                team.current ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white", children: team.initial }, void 0, !1, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 240,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, !1, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 243,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/layout.tsx",
              lineNumber: 231,
              columnNumber: 25
            },
            this
          ) }, team.name, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 230,
            columnNumber: 23
          }, this)) }, void 0, !1, {
            fileName: "app/components/layout.tsx",
            lineNumber: 228,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 224,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "a",
          {
            href: "#",
            className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_outline2.Cog6ToothIcon,
                {
                  className: "h-6 w-6 shrink-0",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 254,
                  columnNumber: 21
                },
                this
              ),
              "Settings"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 250,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/layout.tsx",
          lineNumber: 249,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 200,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 199,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 191,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/layout.tsx",
      lineNumber: 189,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "lg:pl-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sticky top-0 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "button",
          {
            type: "button",
            className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
            onClick: () => setSidebarOpen(!0),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 273,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_outline2.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/components/layout.tsx",
                lineNumber: 274,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 268,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "div",
          {
            className: "h-6 w-px bg-gray-900/10 lg:hidden",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/layout.tsx",
            lineNumber: 278,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, !1, {
              fileName: "app/components/layout.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_solid4.MagnifyingGlassIcon,
              {
                className: "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout.tsx",
                lineNumber: 288,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                id: "search-field",
                className: "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",
                placeholder: "Search...",
                type: "search",
                name: "search"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout.tsx",
                lineNumber: 292,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "button",
              {
                type: "button",
                className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 305,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_outline2.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 306,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/layout.tsx",
                lineNumber: 301,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "div",
              {
                className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/layout.tsx",
                lineNumber: 310,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Menu, { as: "div", className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 318,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  "img",
                  {
                    className: "h-8 w-8 rounded-full bg-gray-50",
                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                    alt: ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 319,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "span",
                    {
                      className: "ml-4 text-sm font-semibold leading-6 text-gray-900",
                      "aria-hidden": "true",
                      children: "Tom Cook"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 325,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    import_solid4.ChevronDownIcon,
                    {
                      className: "ml-2 h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 331,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 324,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/layout.tsx",
                lineNumber: 317,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                import_react11.Transition,
                {
                  as: import_react10.Fragment,
                  enter: "transition ease-out duration-100",
                  enterFrom: "transform opacity-0 scale-95",
                  enterTo: "transform opacity-100 scale-100",
                  leave: "transition ease-in duration-75",
                  leaveFrom: "transform opacity-100 scale-100",
                  leaveTo: "transform opacity-0 scale-95",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Menu.Items, { className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "a",
                    {
                      href: item.href,
                      className: classNames2(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      ),
                      children: item.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/layout.tsx",
                      lineNumber: 350,
                      columnNumber: 29
                    },
                    this
                  ) }, item.name, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 348,
                    columnNumber: 25
                  }, this)) }, void 0, !1, {
                    fileName: "app/components/layout.tsx",
                    lineNumber: 346,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/layout.tsx",
                  lineNumber: 337,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/layout.tsx",
              lineNumber: 316,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/layout.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 370,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/layout.tsx",
        lineNumber: 369,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout.tsx",
      lineNumber: 266,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/components/table.tsx
var import_react12 = require("@headlessui/react"), import_solid5 = require("@heroicons/react/20/solid"), import_react13 = require("react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Table({
  columns,
  dataList,
  title,
  subtitle,
  onEdit,
  onBulkDelete,
  onAdd,
  onDelete
}) {
  let checkbox = (0, import_react13.useRef)(), [checked, setChecked] = (0, import_react13.useState)(!1), [indeterminate, setIndeterminate] = (0, import_react13.useState)(!1), [selected, _setSelected] = (0, import_react13.useState)([]);
  (0, import_react13.useEffect)(() => {
    let isIndeterminate = selected.length > 0 && selected.length < dataList.length;
    setChecked(selected.length === dataList.length), setIndeterminate(isIndeterminate), checkbox.current.indeterminate = isIndeterminate;
  }, [dataList.length, selected]);
  function toggleAll() {
    _setSelected(checked || indeterminate ? [] : dataList), setChecked(!checked && !indeterminate), setIndeterminate(!1);
  }
  function handleClickInputSelect(dataItem, checked2) {
    _setSelected(
      onBulkDelete ? checked2 ? [...selected, dataItem] : selected.filter((p) => p !== dataItem) : checked2 ? [dataItem] : []
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: title }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: subtitle ?? "All users that are currently registered." }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex flex-row gap-1 sm:gap-2", children: selected.length < 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          onClick: onAdd,
          type: "button",
          className: `block rounded-md  px-3 py-1.5 text-center text-sm font-semibold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                  ${selected.length === 0 ? "bg-indigo-600 text-white hover:bg-indigo-500 " : "bg-amber-400 text-black hover:bg-amber-300"}`,
          children: selected.length === 0 ? "Add" : "Edit"
        },
        void 0,
        !1,
        {
          fileName: "app/components/table.tsx",
          lineNumber: 79,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        ActionDropdown,
        {
          onBulkDelete: () => {
            onBulkDelete == null || onBulkDelete(selected), _setSelected([]);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/table.tsx",
          lineNumber: 95,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 94,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("table", { className: "min-w-full table-fixed divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { scope: "col", className: "relative px-7 sm:w-12 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "checkbox",
            className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
            ref: checkbox,
            checked,
            onChange: toggleAll,
            style: {
              display: onBulkDelete ? "block" : "none"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/table.tsx",
            lineNumber: 114,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this),
        columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900",
            children: column.header
          },
          `column-${column.accessorKey.toString()}`,
          !1,
          {
            fileName: "app/components/table.tsx",
            lineNumber: 132,
            columnNumber: 25
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("th", { scope: "col", className: "relative py-1 pl-3 pr-4 sm:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: "Edit" }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 143,
          columnNumber: 23
        }, this) }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 142,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/table.tsx",
        lineNumber: 112,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: dataList.map((dataItem) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "tr",
        {
          className: selected.includes(dataItem) ? "bg-gray-50" : void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "relative px-7 sm:w-12 sm:px-6", children: [
              selected.includes(dataItem) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute inset-y-0 left-0 w-0.5 bg-indigo-600" }, void 0, !1, {
                fileName: "app/components/table.tsx",
                lineNumber: 157,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  type: "checkbox",
                  className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
                  value: dataItem.email,
                  checked: selected.includes(dataItem),
                  onChange: (e) => handleClickInputSelect(dataItem, e.target.checked)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table.tsx",
                  lineNumber: 159,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/table.tsx",
              lineNumber: 155,
              columnNumber: 23
            }, this),
            columns.map((column) => {
              let value = dataItem[column.accessorKey];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: column.isColor ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "td",
                {
                  role: "button",
                  className: "whitespace-nowrap px-3 py-2 text-sm text-gray-500",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    "span",
                    {
                      style: {
                        backgroundColor: `${value}`,
                        color: "white"
                      },
                      className: "inline-flex  items-center rounded-md  px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
                      children: value
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/table.tsx",
                      lineNumber: 180,
                      columnNumber: 33
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table.tsx",
                  lineNumber: 176,
                  columnNumber: 31
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "td",
                {
                  className: classNames(
                    "whitespace-nowrap py-1 pr-3 text-sm font-medium",
                    selected.includes(dataItem) ? "text-indigo-600" : "text-gray-900"
                  ),
                  children: dataItem[column.accessorKey]
                },
                void 0,
                !1,
                {
                  fileName: "app/components/table.tsx",
                  lineNumber: 192,
                  columnNumber: 33
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/table.tsx",
                lineNumber: 191,
                columnNumber: 31
              }, this) }, void 0, !1, {
                fileName: "app/components/table.tsx",
                lineNumber: 173,
                columnNumber: 27
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("td", { className: "whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation(), onDelete == null || onDelete(dataItem);
                },
                className: "text-red-600 z-20 hover:text-indigo-900 bg-red-100 hover:bg-indigo-100 px-2 py-1 rounded-md text-xs font-medium",
                children: "Delete"
              },
              void 0,
              !1,
              {
                fileName: "app/components/table.tsx",
                lineNumber: 209,
                columnNumber: 25
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/table.tsx",
              lineNumber: 208,
              columnNumber: 23
            }, this)
          ]
        },
        `row-${dataItem.id}`,
        !0,
        {
          fileName: "app/components/table.tsx",
          lineNumber: 149,
          columnNumber: 21
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/table.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/table.tsx",
      lineNumber: 110,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/table.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/table.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/table.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/table.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/table.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function ActionDropdown({ onBulkDelete }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Menu.Button, { className: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700", children: [
      "Options",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_solid5.ChevronDownIcon,
        {
          className: "-mr-1 h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/table.tsx",
          lineNumber: 238,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/table.tsx",
      lineNumber: 236,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/table.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react12.Transition,
      {
        as: import_react13.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            onClick: onBulkDelete,
            className: classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            ),
            children: "Delete All"
          },
          void 0,
          !1,
          {
            fileName: "app/components/table.tsx",
            lineNumber: 258,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/table.tsx",
          lineNumber: 254,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/table.tsx",
        lineNumber: 245,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/table.tsx",
    lineNumber: 234,
    columnNumber: 5
  }, this);
}

// app/utils/lib/core.ts
var getFormDataValue = (formData, key) => {
  if (!formData)
    throw new Error("Form data is required");
  let val = formData.get(key);
  return val == null ? void 0 : val.toString();
}, createPageFunction = ({ config }) => ({
  loader: async (props) => ({
    data: await config.models[props.params.model].loader(props)
  }),
  action: async (props) => {
    let formData = await props.request.formData(), modelConfig = config.models[props.params.model], action6 = new URL(props.request.url).searchParams.get("action"), formAction = getFormDataValue(formData, "action"), actionToRun = modelConfig.onAdd;
    if (action6 === "edit")
      actionToRun = modelConfig.onAdd;
    else if (formAction === "delete")
      actionToRun = modelConfig.onDelete;
    else if (formAction === "bulkDelete" && modelConfig.onBulkDelete)
      actionToRun = modelConfig.onBulkDelete;
    else if (formAction === "bulkDelete" && !modelConfig.onBulkDelete)
      throw new Error("Bulk delete is not supported");
    try {
      return await actionToRun({
        ...props,
        formData,
        config: modelConfig
      }) || {};
    } catch (error) {
      return console.log({ error }), {
        status: 500,
        message: error && typeof error == "object" && "message" in error ? error.message : "Something went wrong",
        ...error
      };
    }
  }
});

// app/utils/lib/hooks.ts
var import_react20 = require("@remix-run/react"), import_react21 = require("react"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/utils/lib/react.tsx
var import_react18 = require("@remix-run/react"), import_react19 = __toESM(require("react"));

// app/utils/lib/components/form.tsx
var import_solid6 = require("@heroicons/react/24/solid"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Form2({
  title,
  children,
  description,
  SaveButton: SaveButton3,
  onCancel,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-10 divide-y divide-gray-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-x-8 gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-900", children: title }, void 0, !1, {
        fileName: "app/utils/lib/components/form.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-600", children: description || "Update Model Information" }, void 0, !1, {
        fileName: "app/utils/lib/components/form.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_react14.Form,
      {
        ...props,
        method: "POST",
        className: "bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-4 py-6 sm:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-2xl gap-x-6 gap-y-8 flex flex-col", children }, void 0, !1, {
            fileName: "app/utils/lib/components/form.tsx",
            lineNumber: 37,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/utils/lib/components/form.tsx",
            lineNumber: 36,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8", children: [
            SaveButton3,
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "button",
              {
                onClick: onCancel,
                type: "button",
                className: "text-sm font-semibold leading-6 text-gray-900",
                children: "Cancel"
              },
              void 0,
              !1,
              {
                fileName: "app/utils/lib/components/form.tsx",
                lineNumber: 45,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/utils/lib/components/form.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/utils/lib/components/form.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var DefaultInput2 = ({
  label,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: `${props.hidden ? "hidden" : ""}`, children: [
  label ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "label",
    {
      htmlFor: "first-name",
      className: "block text-sm font-medium leading-6 text-gray-900",
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 72,
      columnNumber: 9
    },
    this
  ) : null,
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "input",
    {
      ...props,
      className: `block w-full pl-4 rounded-md border-[1px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${props.hidden ? "hidden" : ""}`
    },
    void 0,
    !1,
    {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 80,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/utils/lib/components/form.tsx",
  lineNumber: 70,
  columnNumber: 5
}, this), ImageInput2 = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "col-span-full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "label",
    {
      htmlFor: "cover-photo",
      className: "block text-sm font-medium leading-6 text-gray-900",
      children: "Cover photo"
    },
    void 0,
    !1,
    {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 94,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_solid6.PhotoIcon,
      {
        className: "mx-auto h-12 w-12 text-gray-300",
        "aria-hidden": "true"
      },
      void 0,
      !1,
      {
        fileName: "app/utils/lib/components/form.tsx",
        lineNumber: 102,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "label",
        {
          htmlFor: "file-upload",
          className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Upload a file" }, void 0, !1, {
              fileName: "app/utils/lib/components/form.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                id: "file-upload",
                name: "file-upload",
                type: "file",
                className: "sr-only"
              },
              void 0,
              !1,
              {
                fileName: "app/utils/lib/components/form.tsx",
                lineNumber: 112,
                columnNumber: 15
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/utils/lib/components/form.tsx",
          lineNumber: 107,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "pl-1", children: "or drag and drop" }, void 0, !1, {
        fileName: "app/utils/lib/components/form.tsx",
        lineNumber: 119,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 106,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "text-xs leading-5 text-gray-600", children: "PNG, JPG, GIF up to 10MB" }, void 0, !1, {
      fileName: "app/utils/lib/components/form.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 101,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/utils/lib/components/form.tsx",
  lineNumber: 93,
  columnNumber: 5
}, this), SaveButton2 = ({
  label,
  isLoading
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "button",
  {
    type: "submit",
    className: "rounded-md bg-indigo-600 items-center flex flex-row gap-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    children: [
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "div",
        {
          className: "inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          role: "status",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." }, void 0, !1, {
            fileName: "app/utils/lib/components/form.tsx",
            lineNumber: 147,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/utils/lib/components/form.tsx",
          lineNumber: 143,
          columnNumber: 9
        },
        this
      ) : null,
      label
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/utils/lib/components/form.tsx",
    lineNumber: 138,
    columnNumber: 5
  },
  this
);
Form2.ImageInput = ImageInput2;
Form2.DefaultInput = DefaultInput2;
Form2.SaveButton = SaveButton2;

// app/utils/lib/components/slide-over.tsx
var import_react15 = require("@headlessui/react"), import_outline3 = require("@heroicons/react/24/outline"), import_react16 = __toESM(require("react")), import_react17 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function SlideOver({
  children,
  isOpen,
  onClose
}) {
  let [open, setOpen] = (0, import_react17.useState)(isOpen);
  import_react16.default.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  let handleClose = () => {
    setOpen(!1), onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Transition.Root, { show: open, as: import_react17.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Dialog, { as: "div", className: "relative z-10", onClose: handleClose, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed inset-0" }, void 0, !1, {
      fileName: "app/utils/lib/components/slide-over.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_react15.Transition.Child,
      {
        as: import_react17.Fragment,
        enter: "transform transition ease-in-out duration-500 sm:duration-700",
        enterFrom: "translate-x-full",
        enterTo: "translate-x-0",
        leave: "transform transition ease-in-out duration-500 sm:duration-700",
        leaveFrom: "translate-x-0",
        leaveTo: "translate-x-full",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              type: "button",
              className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              onClick: handleClose,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, !1, {
                  fileName: "app/utils/lib/components/slide-over.tsx",
                  lineNumber: 56,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_outline3.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/utils/lib/components/slide-over.tsx",
                  lineNumber: 57,
                  columnNumber: 29
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/utils/lib/components/slide-over.tsx",
              lineNumber: 51,
              columnNumber: 27
            },
            this
          ) }, void 0, !1, {
            fileName: "app/utils/lib/components/slide-over.tsx",
            lineNumber: 50,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/utils/lib/components/slide-over.tsx",
            lineNumber: 46,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/utils/lib/components/slide-over.tsx",
            lineNumber: 45,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative mt-6 flex-1 px-4 sm:px-6", children }, void 0, !1, {
            fileName: "app/utils/lib/components/slide-over.tsx",
            lineNumber: 62,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/utils/lib/components/slide-over.tsx",
          lineNumber: 44,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/utils/lib/components/slide-over.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/utils/lib/components/slide-over.tsx",
        lineNumber: 34,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/utils/lib/components/slide-over.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/utils/lib/components/slide-over.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/utils/lib/components/slide-over.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/utils/lib/components/slide-over.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/utils/lib/components/slide-over.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/utils/lib/react.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), LibContext = import_react19.default.createContext({
  config: {}
}), LibProvider = ({
  children,
  config
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LibContext.Provider, { value: { config }, children }, void 0, !1, {
  fileName: "app/utils/lib/react.tsx",
  lineNumber: 21,
  columnNumber: 5
}, this), LibForm = ({
  title,
  children,
  onCancel
}) => {
  let { state } = (0, import_react18.useNavigation)(), stateRef = import_react19.default.useRef(state);
  return import_react19.default.useEffect(() => {
    stateRef.current = state;
  }, [state]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    Form2,
    {
      onCancel,
      title,
      method: "POST",
      SaveButton: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Form2.SaveButton,
        {
          label: state === "submitting" ? "Saving..." : "Save",
          isLoading: state === "submitting"
        },
        void 0,
        !1,
        {
          fileName: "app/utils/lib/react.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/utils/lib/react.tsx",
      lineNumber: 42,
      columnNumber: 5
    },
    this
  );
}, LibSliderOver = ({
  children,
  isOpen,
  onCancel
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SlideOver, { isOpen, onClose: onCancel, children }, void 0, !1, {
  fileName: "app/utils/lib/react.tsx",
  lineNumber: 69,
  columnNumber: 5
}, this);

// app/utils/lib/hooks.ts
var import_react23 = __toESM(require("react")), useModel = () => {
  let { config } = (0, import_react21.useContext)(LibContext);
  if (!config.models)
    throw new Error("Please Provide the config in the LibProvider");
  let { model } = (0, import_react20.useParams)();
  (0, import_tiny_invariant.default)(model, "Model is required");
  let modelConfig = config.models[model], getColumns = () => {
    var _a, _b;
    return ((_b = (_a = modelConfig.view) == null ? void 0 : _a.table) == null ? void 0 : _b.columns) || [];
  }, pageTitle = modelConfig.title, supportsBulkDelete = modelConfig.onBulkDelete !== void 0;
  return {
    getColumns,
    pageTitle,
    addForm: modelConfig.view.AddForm,
    supportsBulkDelete,
    ...config
  };
}, useAdminPage = () => {
  var _a, _b, _c, _d;
  let model = useModel(), navigate = (0, import_react20.useNavigate)(), { data } = (0, import_react20.useLoaderData)(), actionData = (0, import_react20.useActionData)(), submit = (0, import_react20.useSubmit)(), navigationState = (0, import_react20.useNavigation)(), { id } = (0, import_react20.useParams)(), singleItem = (_a = data == null ? void 0 : data.find) == null ? void 0 : _a.call(data, (item) => item.id === id), dataItemDeleted = (_b = navigationState.formData) == null ? void 0 : _b.get("id"), dataItemsDeleted = navigationState.formData ? JSON.parse(((_d = (_c = navigationState.formData) == null ? void 0 : _c.get("ids")) == null ? void 0 : _d.toString()) || "[]") : void 0, handleClickEdit = (dataItem) => {
    navigate(`${dataItem == null ? void 0 : dataItem.id}`);
  }, [searchParams, setSearchParams] = (0, import_react20.useSearchParams)(), handelClickAdd = () => {
    searchParams.set("action", "create"), setSearchParams(searchParams);
  }, handelClickDelete = (dataItem) => {
    submit(
      {
        id: dataItem.id,
        action: "delete"
      },
      {
        method: "POST"
      }
    );
  }, handleClickBulkDelete = (dataItems) => {
    submit(
      {
        ids: JSON.stringify(dataItems.map((item) => item.id)),
        action: "bulkDelete"
      },
      {
        method: "POST"
      }
    );
  }, dataListToRender = (data == null ? void 0 : data.filter((data2) => data2.id !== dataItemDeleted && !(dataItemsDeleted != null && dataItemsDeleted.includes(data2.id)))) || [], getOverlayProps = () => ({
    isOpen: searchParams.get("action") === "create",
    onCancel: () => {
      searchParams.delete("action"), setSearchParams(searchParams);
    }
  }), getFormProps = () => ({
    title: "Title Form",
    onCancel: () => {
      searchParams.delete("action"), setSearchParams(searchParams);
    },
    error: {
      message: actionData == null ? void 0 : actionData.fieldMessage,
      field: actionData == null ? void 0 : actionData.field
    }
  }), getFormFieldProps = (field) => {
    let isCreating = searchParams.get("action") === "create", isSubmitting = actionState === "loading";
    return {
      ...field,
      key: field.name,
      value: isCreating && isSubmitting ? "" : field.value,
      error: (actionData == null ? void 0 : actionData.field) === field.name ? (actionData == null ? void 0 : actionData.fieldMessage) || "" : void 0
    };
  }, actionState = navigationState.state, [closedNotification, setClosedNotification] = import_react23.default.useState(!1);
  import_react23.default.useEffect(() => {
    actionState === "submitting" && setClosedNotification(!1);
  }, [actionState]);
  let getNotificationProps = import_react23.default.useCallback(() => {
    let isOpen = closedNotification ? !1 : !!(actionData != null && actionData.message);
    return {
      isOpen,
      key: isOpen ? "open" : "close",
      message: "Something went wrong",
      subMessage: actionData == null ? void 0 : actionData.message,
      isError: !0,
      onClose: () => {
        setClosedNotification(!0);
      }
    };
  }, [actionData == null ? void 0 : actionData.message, closedNotification]);
  return {
    columns: model.getColumns(),
    optimisicData: dataListToRender,
    data,
    handelClickAdd,
    handleClickEdit,
    handelClickDelete,
    handleClickBulkDelete: model.supportsBulkDelete ? handleClickBulkDelete : void 0,
    currentData: singleItem,
    getOverlayProps,
    getFormProps,
    getFormFieldProps,
    getNotificationProps,
    ...model
  };
};

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  CONFIG: () => CONFIG,
  default: () => Index
});
var import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), CONFIG = {
  models: {
    Location: {
      title: "Locations",
      loader: async ({ request }) => await getXataClient().db.Location.getAll(),
      onAdd: async ({ formData }) => {
        let client2 = await getXataClient();
        try {
          return await client2.db.Location.create({
            name: getFormDataValue(formData, "name"),
            description: getFormDataValue(formData, "description")
          });
        } catch (e) {
          throw console.log(e), {
            message: e.message,
            status: e.status,
            field: "name",
            fieldMessage: "Name already exists"
          };
        }
      },
      onDelete: async ({ formData, params }) => {
        await (await getXataClient()).db.Location.deleteOrThrow({
          id: getFormDataValue(formData, "id") || ""
        });
      },
      onBulkDelete: async ({ formData }) => {
        let client2 = await getXataClient(), promises = JSON.parse(
          getFormDataValue(formData, "ids") || "[]"
        ).map(
          (id) => client2.db.Location.delete({ id })
        );
        await Promise.all(promises);
      },
      redirect: "/admin/Location",
      view: {
        table: {
          columns: [
            {
              accessorKey: "name",
              header: "name"
            }
          ]
        },
        AddForm: {
          fields: [
            {
              Component: Form.DefaultInput,
              name: "name",
              label: "name",
              minLength: 3
            }
          ]
        }
      }
    },
    Tag: {
      title: "Tags",
      loader: async (props) => (await (await getXataClient()).db.Tag.select([
        "label",
        "id",
        "color.name"
      ]).getAll()).map((t) => {
        var _a;
        return {
          ...t,
          color: ((_a = t.color) == null ? void 0 : _a.name) || ""
        };
      }),
      onDelete: async ({ formData }) => await (await getXataClient()).db.Tag.delete({
        id: getFormDataValue(formData, "id") || ""
      }),
      onAdd: async ({ formData }) => await (await getXataClient()).db.Tag.create({
        label: getFormDataValue(formData, "label"),
        color: getFormDataValue(formData, "color")
      }),
      redirect: "/admin/Tag",
      view: {
        table: {
          columns: [
            {
              accessorKey: "label",
              header: "Label"
            },
            {
              accessorKey: "color",
              header: "Color",
              isColor: !0
            }
          ]
        },
        AddForm: {
          fields: [
            {
              Component: Form.DefaultInput,
              name: "label",
              label: "Label",
              minLength: 4
            },
            {
              name: "color",
              label: "Color",
              Component: Form.Select,
              onGetOptions: async (query) => {
                var _a, _b;
                return ((_b = (_a = (await (await getXataClient()).search.byTable(query, {
                  tables: [
                    {
                      table: "Color",
                      target: [{ column: "name" }]
                    }
                  ],
                  fuzziness: 1,
                  prefix: "phrase"
                })).Color) == null ? void 0 : _a.filter((r) => r.id && r.name)) == null ? void 0 : _b.map((r) => ({
                  name: r.name || "",
                  color: r.name || "",
                  id: r.id || ""
                }))) || [];
              }
            }
          ]
        }
      }
    }
  }
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react24.Outlet, {}, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 177,
    columnNumber: 10
  }, this);
}

// app/routes/admin.$model.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), import_react26 = require("react"), pageFunction = createPageFunction({
  config: CONFIG
}), loader = pageFunction.loader, action = pageFunction.action;
function AdminModelPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LibProvider, { config: CONFIG, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Content, {}, void 0, !1, {
    fileName: "app/routes/admin.$model.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin.$model.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var Content = () => {
  let {
    pageTitle,
    optimisicData,
    columns,
    handleClickEdit,
    handelClickAdd,
    handelClickDelete,
    handleClickBulkDelete,
    addForm,
    getOverlayProps,
    getFormProps,
    getFormFieldProps,
    getNotificationProps
  } = useAdminPage();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Table,
      {
        onEdit: handleClickEdit,
        onAdd: handelClickAdd,
        onDelete: handelClickDelete,
        onBulkDelete: handleClickBulkDelete,
        columns,
        dataList: optimisicData,
        title: pageTitle,
        subtitle: "Manage locations for your events"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin.$model.tsx",
        lineNumber: 42,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin.$model.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LibSliderOver, { ...getOverlayProps(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LibForm, { ...getFormProps(), children: addForm.fields.map((field) => /* @__PURE__ */ (0, import_react26.createElement)(field.Component, { ...getFormFieldProps(field), key: field.name })) }, void 0, !1, {
      fileName: "app/routes/admin.$model.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$model.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "z-50 absolute top-0 -right-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Notification, { ...getNotificationProps() }, void 0, !1, {
      fileName: "app/routes/admin.$model.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin.$model.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin.$model.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};

// app/routes/api.options.ts
var api_options_exports = {};
__export(api_options_exports, {
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var loader2 = async ({ request }) => {
  var _a;
  await isLoggedIn(request);
  let url = new URL(request.url), query = url.searchParams.get("query"), name = url.searchParams.get("name");
  (0, import_tiny_invariant2.default)(typeof query == "string", "query is required");
  let field = CONFIG.models.Tag.view.AddForm.fields.find(
    (field2) => field2.name === (name == null ? void 0 : name.toString())
  ), options = await ((_a = field == null ? void 0 : field.onGetOptions) == null ? void 0 : _a.call(field, query));
  return (0, import_node3.json)({
    items: options || []
  });
};

// app/routes/vacation.tsx
var vacation_exports = {};
__export(vacation_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => NotesRoute,
  loader: () => loader3
});
var import_react34 = require("@remix-run/react"), import_date_fns2 = require("date-fns"), import_react35 = __toESM(require("react"));

// app/components/error-boundary.tsx
var import_react28 = require("@remix-run/react");

// app/utils/misc.ts
var import_react27 = __toESM(require("react"));
function getErrorMessage(error) {
  return typeof error == "string" ? error : error && typeof error == "object" && "message" in error && typeof error.message == "string" ? error.message : (console.error("Unable to get error message for error", error), "Unknown Error");
}

// app/components/error-boundary.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function GeneralErrorBoundary({
  defaultStatusHandler = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
    error.status,
    " ",
    error.data
  ] }, void 0, !0, {
    fileName: "app/components/error-boundary.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this),
  statusHandlers,
  unexpectedErrorHandler = (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: getErrorMessage(error) }, void 0, !1, {
    fileName: "app/components/error-boundary.tsx",
    lineNumber: 22,
    columnNumber: 39
  }, this)
}) {
  let error = (0, import_react28.useRouteError)(), params = (0, import_react28.useParams)();
  return typeof document < "u" && console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "bg-red-200 text-h2 container mx-auto flex items-center justify-center p-20", children: (0, import_react28.isRouteErrorResponse)(error) ? ((statusHandlers == null ? void 0 : statusHandlers[error.status]) ?? defaultStatusHandler)({
    error,
    params
  }) : unexpectedErrorHandler(error) }, void 0, !1, {
    fileName: "app/components/error-boundary.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/features/vacation/container/activity-booking-bottom-sheet.tsx
var import_react33 = require("@headlessui/react");

// app/components/bottom-sheet-modal.tsx
var import_react29 = require("@headlessui/react"), import_react30 = __toESM(require("react")), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), BottomSheetModal = ({
  isOpen,
  onClose,
  children
}) => {
  let [open, setOpen] = import_react30.default.useState(isOpen), handleClose = () => {
    setOpen(!1), onClose();
  };
  return import_react30.default.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react29.Transition.Root, { show: open, as: import_react30.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react29.Dialog,
    {
      as: "div",
      className: "relative z-10",
      onClose: () => {
        handleClose();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react29.Transition.Child,
          {
            as: import_react30.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, !1, {
              fileName: "app/components/bottom-sheet-modal.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/bottom-sheet-modal.tsx",
            lineNumber: 33,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "fixed inset-0 z-10 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          import_react29.Transition.Child,
          {
            as: import_react30.Fragment,
            enter: "ease-out duration-500",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react29.Dialog.Panel, { className: "relative w-full transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6", children }, void 0, !1, {
              fileName: "app/components/bottom-sheet-modal.tsx",
              lineNumber: 56,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/bottom-sheet-modal.tsx",
            lineNumber: 47,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/bottom-sheet-modal.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/bottom-sheet-modal.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/bottom-sheet-modal.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/bottom-sheet-modal.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/components/icons/index.tsx
var import_framer_motion = require("framer-motion"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), SettingsIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "h-6 w-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
);
var RocketIcon = ({ animate }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  import_framer_motion.motion.svg,
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "h-6 w-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion.motion.path,
      {
        initial: { pathLength: animate ? 0 : 1 },
        animate: { pathLength: 1 },
        transition: { duration: 2, ease: "easeInOut" },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 43,
    columnNumber: 5
  },
  this
), CheckIcon2 = ({ animate }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
  import_framer_motion.motion.svg,
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    className: "h-6 w-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion.motion.path,
      {
        initial: {
          pathLength: 0
        },
        animate: animate ? {
          scale: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          pathLength: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 0.98, 0.99, 1]
        } : {},
        transition: {
          duration: 1
        },
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/index.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/icons/index.tsx",
    lineNumber: 65,
    columnNumber: 5
  },
  this
);

// app/features/vacation/store/vacation-store.ts
var import_zustand = require("zustand"), import_middleware = require("zustand/middleware"), useVacationStore = (0, import_zustand.create)()(
  (0, import_middleware.devtools)(
    // persist(
    (set, get) => ({
      vacation: {},
      selectedDay: /* @__PURE__ */ new Date()
    }),
    {
      name: "vacation-store"
    }
  )
), selectDay = (date) => useVacationStore.setState((state) => ({ selectedDay: date }), !1, {
  type: "SELECT_DAY",
  date
}), selectActivity = (activity) => {
  useVacationStore.setState(
    (state) => {
      let vacation = state.vacation;
      return vacation.setPendingActivity(activity), { vacation };
    },
    !1,
    {
      type: "SELECT_ACTIVITY",
      activity
    }
  );
}, closeAcitivtyModal = () => {
  useVacationStore.setState(
    (state) => {
      let vacation = state.vacation;
      return vacation.setPendingActivity(null), { vacation };
    },
    !1,
    {
      type: "CLOSE_ACTIVITY_MODAL"
    }
  );
}, initVacation = (vacation) => {
  useVacationStore.setState(
    (state) => ({ vacation }),
    !1,
    {
      type: "INIT_VACATION",
      vacation
    }
  );
};

// app/features/vacation/container/hooks/use-activity-booking-bottom-sheet.ts
var import_react31 = require("@remix-run/react"), import_react32 = __toESM(require("react"));
var useActivityBookingBottomSheet = () => {
  let [bookTime, setBookTime] = import_react32.default.useState(!1), [activityIsBooked, setActivityIsBooked] = import_react32.default.useState(!1), inputRef = import_react32.default.useRef(null), closeAcitivtyModal2 = useVacationStore(
    (state) => state.closeAcitivtyModal
  ), vacation = useVacationStore((state) => state.vacation), actionData = (0, import_react31.useActionData)(), submit = (0, import_react31.useSubmit)(), navigation2 = (0, import_react31.useNavigation)(), isSubmitting = navigation2.state === "submitting", activityHasFixedDate = vacation.pendingActivityHasFixedDate, inputDefaultDate = vacation.startDatePendingActivity, handleClickBookTime = () => {
    setBookTime(!0);
  }, handleClickConfirm = () => {
    var _a, _b, _c;
    let datetime = ((_a = inputRef.current) == null ? void 0 : _a.value) ?? "", formData = new FormData();
    formData.append("datetime", datetime), formData.append("activityId", ((_c = (_b = vacation.pendingActivity) == null ? void 0 : _b.props) == null ? void 0 : _c.id) ?? ""), submit(formData, {
      method: "post"
    });
  };
  return import_react32.default.useEffect(
    function() {
      actionData != null && actionData.success && navigation2.state === "loading" && (setActivityIsBooked(!0), setTimeout(closeAcitivtyModal2, 1e3));
    },
    [actionData == null ? void 0 : actionData.success, closeAcitivtyModal2, navigation2.state]
  ), {
    bookTime,
    activityIsBooked,
    inputRef,
    activityHasFixedDate,
    inputDefaultDate,
    isSubmitting,
    closeAcitivtyModal: closeAcitivtyModal2,
    handleClickBookTime,
    handleClickConfirm
  };
};

// app/features/vacation/container/activity-booking-bottom-sheet.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), ActivityBookingBottomSheet = () => {
  let selectedActivity = useVacationStore(
    (state) => state.vacation.pendingActivity
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(BottomSheetModal, { onClose: closeAcitivtyModal, isOpen: !!selectedActivity, children: selectedActivity ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ActivityContent, { activity: selectedActivity }, void 0, !1, {
    fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) : null }, void 0, !1, {
    fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, ActivityContent = ({ activity }) => {
  let {
    activityHasFixedDate,
    inputDefaultDate,
    bookTime,
    inputRef,
    handleClickBookTime,
    handleClickConfirm,
    isSubmitting,
    activityIsBooked,
    closeAcitivtyModal: closeAcitivtyModal2
  } = useActivityBookingBottomSheet();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RocketIcon, {}, void 0, !1, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-3 text-center sm:mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          import_react33.Dialog.Title,
          {
            as: "h3",
            className: "text-base font-semibold leading-6 text-gray-900",
            children: "Personal Training Session with Hans"
          },
          void 0,
          !1,
          {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 43,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-sm text-gray-500", children: activity.props.description.props.value }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      activityHasFixedDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex w-full flex-col justify-center gap-2 px-2 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-center", children: "Event Time" }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid place-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            disabled: !0,
            type: "datetime-local",
            className: "block w-[75vw] rounded-md border border-gray-300 px-2  py-1 text-center focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            defaultValue: inputDefaultDate || (/* @__PURE__ */ new Date()).toLocaleDateString().slice(0, 16)
          },
          void 0,
          !1,
          {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 77,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "px-2 pt-4", children: "Please select a day and time" }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        inputDefaultDate || bookTime ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex w-full flex-row justify-center pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            ref: inputRef,
            type: "datetime-local",
            className: "block w-[75vw] rounded-md border border-gray-300 px-2 py-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            defaultValue: getCurrentDateString()
          },
          void 0,
          !1,
          {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 62,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-5 flex flex-col gap-1 sm:mt-6", children: [
      activityHasFixedDate ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          disabled: isSubmitting,
          type: "button",
          className: `inline-flex w-full justify-center rounded-md ${bookTime ? "bg-green-300 " : "bg-yellow-300"} px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `,
          onClick: bookTime ? handleClickConfirm : handleClickBookTime,
          children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-row items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RocketIcon, { animate: !0 }, void 0, !1, {
              fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "We are booking your activity..." }, void 0, !1, {
              fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this) : activityIsBooked ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(CheckIcon2, { animate: !0 }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
            bookTime ? "Confirm" : "Book a time",
            " "
          ] }, void 0, !0, {
            fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "button",
        {
          type: "button",
          disabled: isSubmitting,
          className: "inline-flex w-full justify-center rounded-md bg-indigo-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          onClick: closeAcitivtyModal2,
          children: "Go back to dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
          lineNumber: 118,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/vacation/container/activity-booking-bottom-sheet.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
};

// app/features/vacation/container/activity-list.tsx
var import_solid7 = require("@heroicons/react/20/solid"), import_date_fns = require("date-fns"), import_framer_motion2 = require("framer-motion");

// app/components/badge.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), Badge = ({
  color,
  children
}) => {
  let colorClasses = {
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
    indigo: "bg-indigo-100 text-indigo-800",
    gray: "bg-gray-100 text-gray-800",
    night: "bg-night-100 text-night-800"
  }[color] || "bg-gray-100 text-gray-800";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "span",
    {
      className: `${colorClasses} text-night-700 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/badge.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
};

// app/features/vacation/container/activity-list.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), ActivityList = ({
  activities,
  title
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-auto w-full flex-1 pb-2 pl-2 md:container md:rounded-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex h-full flex-col", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-row items-center space-x-4 px-4 pb-1 pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid h-10 w-10 place-items-center rounded-xl   bg-purple-200 p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(RocketIcon, {}, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "text-left text-lg font-bold", children: title }, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/vacation/container/activity-list.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this),
  activities.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ul", { className: "flex flex-1 flex-col gap-4 overflow-scroll px-2 pt-2", children: activities.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_framer_motion2.motion.li,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.5 },
      className: "px-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        CardItem,
        {
          onClick: () => selectActivity(item),
          activity: item
        },
        index,
        !1,
        {
          fileName: "app/features/vacation/container/activity-list.tsx",
          lineNumber: 39,
          columnNumber: 19
        },
        this
      )
    },
    index,
    !1,
    {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 32,
      columnNumber: 17
    },
    this
  )) }, void 0, !1, {
    fileName: "app/features/vacation/container/activity-list.tsx",
    lineNumber: 29,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-1 flex-col items-center justify-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid h-20 w-20 place-items-center rounded-xl bg-purple-200  p-2 pb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(RocketIcon, {}, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 51,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-night-700 text-lg font-bold", children: "No activities" }, void 0, !1, {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/vacation/container/activity-list.tsx",
    lineNumber: 49,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/features/vacation/container/activity-list.tsx",
  lineNumber: 19,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/features/vacation/container/activity-list.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this), CardItem = ({
  onClick,
  activity
}) => {
  let vacation = useVacationStore((state) => state.vacation), isUnallocated = vacation.getActivityIsUnallocated(activity), isFixed = vacation.getActivityHasFixedDate(activity);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_framer_motion2.motion.div,
    {
      whileTap: { scale: 0.95 },
      animate: {
        border: isUnallocated ? "2px solid #FBBF24" : isFixed ? "2px solid #374151" : "2px solid #10B981"
      },
      onClick,
      className: "border-night-700 flex w-full flex-col gap-3 rounded-2xl border-[2px] p-2 px-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex w-full flex-row  justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "text-md font-bold", children: activity.name }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { className: "hover:bg-night-700/10 rounded-full p-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SettingsIcon, {}, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 93,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 92,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 91,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/vacation/container/activity-list.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex w-full flex-row justify-between gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-1 flex-row gap-1", children: activity.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Badge, { color: tag.color, children: tag.label }, index, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 100,
            columnNumber: 9
          }, this),
          isUnallocated ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-1 flex-row justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { className: "border-accent-yellow hover:bg-night-700/10 rounded-md border-[2px] p-1 px-2 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xs", children: "Book a slot" }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/features/vacation/container/activity-list.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_solid7.CalendarIcon, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 122,
            columnNumber: 11
          }, this),
          activity.datetime ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xs ", children: [
            (0, import_date_fns.format)(new Date(activity.datetime), "dd MMM yyyy 'at' HH:mm"),
            " ",
            isFixed ? "(Fixed Time)" : ""
          ] }, void 0, !0, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xs ", children: "Not scheduled yet" }, void 0, !1, {
            fileName: "app/features/vacation/container/activity-list.tsx",
            lineNumber: 131,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/vacation/container/activity-list.tsx",
          lineNumber: 121,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/vacation/container/activity-list.tsx",
          lineNumber: 120,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/vacation/container/activity-list.tsx",
      lineNumber: 76,
      columnNumber: 5
    },
    this
  );
};

// app/features/vacation/server-functions/main-page.ts
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/features/vacation/repos/implementations/activityRepoXata.ts
var ActivityRepoXata = class {
  constructor(client2) {
    this.client = client2;
  }
  async confirmDate(activityId, date) {
    let activity = await this.client.db.ActivityBooking.filter({
      id: activityId
    }).getFirst();
    if (!activity)
      throw new Error(`Activity ${activityId} not found`);
    await activity.update({
      datetime: new Date(date).toISOString()
    });
  }
};

// app/features/vacation/repos/implementations/vacationRepoXata.ts
var VacationRepoXata = class {
  constructor(client2) {
    this.client = client2;
  }
  async getVacationById(id) {
    var _a, _b;
    let vacation = await this.client.db.Vacation.select(["*", "location.*"]).filter({ id }).getFirst(), activitiesResult = await this.client.db.VacationActivity.select([
      "activity.activity.*",
      "activity.*"
    ]).filter({ vacation: vacation == null ? void 0 : vacation.id }).getAll();
    if (!vacation)
      throw new Error("Vacation not found");
    if (!activitiesResult)
      throw new Error("Activities not found");
    let tags = await this.client.db.AcivityTag.select([
      "activity.id",
      "tag.*",
      "tag.color.*"
    ]).getAll(), activities = activitiesResult.map((a) => {
      var _a2, _b2, _c;
      let tagsOfActivity = tags.filter(
        (t) => {
          var _a3, _b3;
          return ((_a3 = t.activity) == null ? void 0 : _a3.id) === ((_b3 = a.activity) == null ? void 0 : _b3.id);
        }
      ), activity = a.activity;
      if (!activity)
        throw new Error("Activity not found");
      return {
        ...activity,
        name: ((_a2 = activity == null ? void 0 : activity.activity) == null ? void 0 : _a2.name) || "",
        id: (activity == null ? void 0 : activity.id) || "",
        tags: tagsOfActivity.map((t) => {
          var _a3, _b3, _c2, _d;
          return {
            id: ((_a3 = t.tag) == null ? void 0 : _a3.id) || "",
            label: ((_b3 = t.tag) == null ? void 0 : _b3.label) || "",
            color: ((_d = (_c2 = t.tag) == null ? void 0 : _c2.color) == null ? void 0 : _d.name) || ""
          };
        }),
        isFixedDate: (activity == null ? void 0 : activity.isFixedDate) || !1,
        description: ((_b2 = activity == null ? void 0 : activity.activity) == null ? void 0 : _b2.description) || "",
        datetime: ((_c = activity == null ? void 0 : activity.datetime) == null ? void 0 : _c.toISOString()) || void 0
      };
    }), location = vacation.location;
    if (!location)
      throw new Error("Location not found");
    return {
      location: {
        name: (location == null ? void 0 : location.name) || "",
        description: (location == null ? void 0 : location.description) || ""
      },
      vacation: {
        ...vacation,
        endDate: ((_a = vacation == null ? void 0 : vacation.endDate) == null ? void 0 : _a.toISOString()) || "",
        startDate: ((_b = vacation == null ? void 0 : vacation.startDate) == null ? void 0 : _b.toISOString()) || "",
        description: (vacation == null ? void 0 : vacation.description) || ""
      },
      tags: tags.map((t) => {
        var _a2, _b2, _c, _d;
        return {
          id: ((_a2 = t.tag) == null ? void 0 : _a2.id) || "",
          label: ((_b2 = t.tag) == null ? void 0 : _b2.label) || "",
          color: ((_d = (_c = t.tag) == null ? void 0 : _c.color) == null ? void 0 : _d.name) || ""
        };
      }),
      activities: activities.map((a) => ({
        ...a,
        datetime: a.datetime || void 0
      }))
    };
  }
};

// app/utils/stuff.server.ts
console.log("____stuff.server.ts");
var client = getXataClient(), initDataFunctions = (args) => {
  let { repository } = args, createLoader2 = (loader6) => async (args2) => loader6({ ...args2, repository });
  return { createLoader: createLoader2, createAction: createLoader2 };
}, { createLoader, createAction } = initDataFunctions({
  repository: {
    vacation: new VacationRepoXata(client),
    activity: new ActivityRepoXata(client)
  }
});

// app/features/vacation/server-functions/main-page.ts
var vacationLoader = createLoader(
  async ({ repository, request }) => (await isLoggedIn(request), { vacation: await repository.vacation.getVacationById(
    "rec_chro3uqqsbcn5poqocb0"
  ) })
), vacationAction = createAction(async ({ request, repository }) => {
  let formData = await request.formData(), datetime = formData.get("datetime"), activityId = formData.get("activityId");
  return (0, import_tiny_invariant3.default)(datetime, "datetime is required"), (0, import_tiny_invariant3.default)(activityId, "activityId is required"), await repository.activity.confirmDate(
    activityId,
    new Date(datetime).toISOString()
  ), {
    success: !0
  };
});

// app/features/vacation/container/vacation-date-picker.tsx
var import_react_day_picker = require("react-day-picker");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), VacationDatePicker = () => {
  let vacation = useVacationStore((state) => state.vacation), vacationRange = {
    from: vacation.startDate,
    to: vacation.endDate
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    import_react_day_picker.DayPicker,
    {
      fromMonth: vacation.startDate,
      onDayClick: selectDay,
      selected: vacationRange
    },
    void 0,
    !1,
    {
      fileName: "app/features/vacation/container/vacation-date-picker.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
};

// app/shared/domain/entity.ts
var isEntity = (v) => v instanceof Entity, Entity = class {
  constructor(props, id) {
    this._id = id || "", this.props = props;
  }
  equals(object) {
    return object == null || object == null ? !1 : this === object ? !0 : isEntity(object) ? this._id === object._id : !1;
  }
};

// app/features/vacation/domain/vacation.tsx
var VacationEntity = class extends Entity {
  constructor(props, id) {
    super(props, id);
    this._pendingActivity = null;
  }
  static create(props, id) {
    return new VacationEntity(props, id);
  }
  get startDate() {
    return this.props.startDate.value;
  }
  get endDate() {
    return this.props.endDate.value;
  }
  static fromJSON(json2) {
    return VacationEntity.create(json2, json2.id);
  }
  getActivityAtDate(date) {
    return this.props.activities.filter((activity) => activity.props.datetime ? activity.isSameDate(date) : !1);
  }
  getUnallocatedActivities() {
    return this.props.activities.filter((a) => a.isUnallocated);
  }
  setPendingActivity(activity) {
    this._pendingActivity = activity;
  }
  get pendingActivity() {
    return this._pendingActivity;
  }
  get pendingActivityHasFixedDate() {
    var _a;
    return (_a = this._pendingActivity) == null ? void 0 : _a.props.isFixedDate;
  }
  get startDatePendingActivity() {
    var _a, _b;
    let _date = (_a = this.pendingActivity) == null ? void 0 : _a.props.datetime;
    return _date ? (_b = _date.value) == null ? void 0 : _b.toISOString().slice(0, 16) : null;
  }
  getActivityIsUnallocated(activity) {
    return activity.isUnallocated;
  }
  getActivityHasFixedDate(activity) {
    return activity.props.isFixedDate && activity.props.datetime;
  }
};

// app/features/vacation/domain/location.tsx
var LocationEntity = class extends Entity {
  constructor(props, id) {
    super(props, id);
  }
  static create(props, id) {
    if (!props.name)
      throw new Error("Location name is required");
    return new LocationEntity(props, id);
  }
};

// app/shared/domain/value-object.ts
var ValueObject = class {
  constructor(props) {
    let baseProps = {
      ...props
    };
    this.props = baseProps;
  }
  equals(vo) {
    return vo == null || vo.props === void 0 ? !1 : JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
};

// app/features/vacation/domain/tag.ts
var TagValueObject = class extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(props) {
    return new TagValueObject(props);
  }
  get label() {
    return this.props.label;
  }
  get color() {
    return this.props.color;
  }
};

// app/features/vacation/domain/activity.ts
var ActivityEntity = class extends Entity {
  constructor(props) {
    super(props);
  }
  static create(props) {
    return new ActivityEntity(props);
  }
  isSameDate(date) {
    var _a, _b, _c, _d, _e, _f;
    return ((_b = (_a = this.props.datetime) == null ? void 0 : _a.value) == null ? void 0 : _b.getFullYear()) === (date == null ? void 0 : date.getFullYear()) && ((_d = (_c = this.props.datetime) == null ? void 0 : _c.value) == null ? void 0 : _d.getMonth()) === (date == null ? void 0 : date.getMonth()) && ((_f = (_e = this.props.datetime) == null ? void 0 : _e.value) == null ? void 0 : _f.getDate()) === (date == null ? void 0 : date.getDate());
  }
  get isUnallocated() {
    var _a;
    return !((_a = this.props.datetime) != null && _a.value);
  }
  get isFixedDate() {
    return this.props.isFixedDate;
  }
  get datetime() {
    var _a;
    return (_a = this.props.datetime) == null ? void 0 : _a.value;
  }
  get name() {
    return this.props.name.props.value;
  }
  get tags() {
    return this.props.tags;
  }
};

// app/features/vacation/domain/date.ts
var DateValueObject = class extends ValueObject {
  constructor(props) {
    super(props);
  }
  get value() {
    if (this.props.value)
      return new Date(this.props.value);
  }
  static create(props) {
    return new DateValueObject(props);
  }
};

// app/features/vacation/domain/activity-name.ts
var _ActivityNameValueObject = class extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(props) {
    if (props.value.length < _ActivityNameValueObject.minLength)
      throw new Error(
        `Activity name must be at least ${_ActivityNameValueObject.minLength}`
      );
    if (props.value.length > _ActivityNameValueObject.maxLength)
      throw new Error(
        `Activity name must be at most ${_ActivityNameValueObject.maxLength}`
      );
    return new _ActivityNameValueObject(props);
  }
}, ActivityNameValueObject = _ActivityNameValueObject;
ActivityNameValueObject.minLength = 3, ActivityNameValueObject.maxLength = 40;

// app/features/vacation/domain/activity-description.ts
var _ActivityDescriptionValueObject = class extends ValueObject {
  constructor(props) {
    super(props);
  }
  static create(props) {
    if (props.value.length < _ActivityDescriptionValueObject.minLength)
      throw new Error(
        `Activity name must be at least ${_ActivityDescriptionValueObject.minLength}`
      );
    if (props.value.length > _ActivityDescriptionValueObject.maxLength)
      throw new Error(
        `Activity name must be at most ${_ActivityDescriptionValueObject.maxLength}`
      );
    return new _ActivityDescriptionValueObject(props);
  }
}, ActivityDescriptionValueObject = _ActivityDescriptionValueObject;
ActivityDescriptionValueObject.minLength = 0, ActivityDescriptionValueObject.maxLength = 500;

// app/features/vacation/mapper/vacationMapper.ts
var VacationMap = class {
  static toDomain({
    location,
    activities,
    tags,
    vacation
  }) {
    if (!location)
      throw new Error("location not found");
    let _location = LocationEntity.create({
      name: location.name || "",
      description: location.description || ""
    }), _tags = tags.map(
      (t) => TagValueObject.create({
        label: t.label || "",
        color: t.color || ""
      })
    ), _activities = activities.map(
      (a) => {
        var _a;
        return ActivityEntity.create({
          id: a.id || "",
          datetime: DateValueObject.create({
            value: ((_a = a.datetime) == null ? void 0 : _a.toString()) || void 0
          }),
          isFixedDate: a.isFixedDate || !1,
          name: ActivityNameValueObject.create({ value: a.name || "" }),
          description: ActivityDescriptionValueObject.create({
            value: a.description || ""
          }),
          tags: _tags
        });
      }
    );
    return VacationEntity.create({
      id: vacation.id || "",
      startDate: DateValueObject.create({
        value: vacation.startDate.toString()
      }),
      endDate: DateValueObject.create({ value: vacation.endDate.toString() }),
      location: _location,
      activities: _activities
    });
  }
};

// app/routes/vacation.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), loader3 = vacationLoader, action2 = vacationAction;
function NotesRoute() {
  let data = (0, import_react34.useLoaderData)(), vacation = useVacationStore((state) => state.vacation);
  return import_react35.default.useEffect(() => {
    initVacation(VacationMap.toDomain(data.vacation));
  }, [data.vacation]), vacation.props ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(NotesContent, {}, void 0, !1, {
    fileName: "app/routes/vacation.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this) : null;
}
var NotesContent = () => {
  let vacation = useVacationStore((state) => state.vacation), selectedDay = useVacationStore((state) => state.selectedDay), activitiesSelectedDay = vacation.getActivityAtDate(selectedDay), activitiesUnallocated = vacation.getUnallocatedActivities();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ActivityBookingBottomSheet, {}, void 0, !1, {
      fileName: "app/routes/vacation.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mx-4 mt-2 flex flex-row items-center justify-center rounded-2xl bg-gray-700 pb-4 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(VacationDatePicker, {}, void 0, !1, {
      fileName: "app/routes/vacation.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/vacation.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    activitiesUnallocated.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      ActivityList,
      {
        title: "Open Activities",
        activities: activitiesUnallocated
      },
      void 0,
      !1,
      {
        fileName: "app/routes/vacation.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    ) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      ActivityList,
      {
        title: (0, import_date_fns2.format)(selectedDay, "dd.MM.yyyy"),
        activities: activitiesSelectedDay
      },
      void 0,
      !1,
      {
        fileName: "app/routes/vacation.tsx",
        lineNumber: 59,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/vacation.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/vacation.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
};
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    GeneralErrorBoundary,
    {
      statusHandlers: {
        404: ({ params }) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
          'No user with the username "',
          params.username,
          '" exists'
        ] }, void 0, !0, {
          fileName: "app/routes/vacation.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/routes/vacation.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index2,
  meta: () => meta
});
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: "HELLO WORLD" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "Oh no, an error occurred!" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("pre", { children: JSON.stringify(error) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader4
});
var import_react36 = require("@remix-run/react"), import_bcryptjs3 = __toESM(require("bcryptjs")), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => (await isLoggedIn(request, { successRedirect: "/" }), {}), action3 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password");
  (0, import_tiny_invariant4.default)(email, "email is required"), (0, import_tiny_invariant4.default)(password, "password is required");
  let salt = await import_bcryptjs3.default.genSalt(10), hashedPassword = await import_bcryptjs3.default.hash(password, salt);
  return await getXataClient().db.User.create({ email, password: hashedPassword }), await authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    context: { formData: form }
  });
};
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "SIGN UP" }, void 0, !1, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react36.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "email", defaultValue: "a@a.de", name: "email", id: "email" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        "input",
        {
          type: "password",
          defaultValue: "1234",
          name: "password",
          id: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { className: "bg-red-300", type: "submit", children: "SIGN UP" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login2,
  loader: () => loader5
});
var import_react37 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => ({
  data: {}
}), action4 = async ({ request }) => {
  console.log("LOGIN...");
  let form = await request.formData(), email = form.get("email"), password = form.get("password");
  console.log("LOGIN...", email, password);
  try {
    await authenticate(request), console.log("Done");
  } catch (error) {
    console.log("Error", error);
  }
};
function Login2() {
  let data = (0, import_react37.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react37.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("input", { type: "email", defaultValue: "a@a.de", name: "email", id: "email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "input",
        {
          type: "password",
          defaultValue: "1234",
          name: "password",
          id: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 43,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { type: "submit", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QUQUU2YC.js", imports: ["/build/_shared/chunk-OKBCQ2CQ.js", "/build/_shared/chunk-MTLEV7TZ.js", "/build/_shared/chunk-7T2XWYFJ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WXXXBMEZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LLH4AQSP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-G5B5VAQJ.js", imports: ["/build/_shared/chunk-KOEEVHRP.js", "/build/_shared/chunk-VHBM3OKI.js", "/build/_shared/chunk-6TFKTU3J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin.$model": { id: "routes/admin.$model", parentId: "routes/admin", path: ":model", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.$model-47YREACD.js", imports: ["/build/_shared/chunk-KDU7PAPT.js", "/build/_shared/chunk-IYD4CINF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.options": { id: "routes/api.options", parentId: "root", path: "api/options", index: void 0, caseSensitive: void 0, module: "/build/routes/api.options-L24YMT6R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-AKMCHION.js", imports: ["/build/_shared/chunk-6TFKTU3J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-GHJTJ3IS.js", imports: ["/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-6TFKTU3J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/vacation": { id: "routes/vacation", parentId: "root", path: "vacation", index: void 0, caseSensitive: void 0, module: "/build/routes/vacation-QVBSKLAQ.js", imports: ["/build/_shared/chunk-KDU7PAPT.js", "/build/_shared/chunk-VHBM3OKI.js", "/build/_shared/chunk-6TFKTU3J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, version: "9b6207fe", hmr: void 0, url: "/build/manifest-9B6207FE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !1, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin.$model": {
    id: "routes/admin.$model",
    parentId: "routes/admin",
    path: ":model",
    index: void 0,
    caseSensitive: void 0,
    module: admin_model_exports
  },
  "routes/api.options": {
    id: "routes/api.options",
    parentId: "root",
    path: "api/options",
    index: void 0,
    caseSensitive: void 0,
    module: api_options_exports
  },
  "routes/vacation": {
    id: "routes/vacation",
    parentId: "root",
    path: "vacation",
    index: void 0,
    caseSensitive: void 0,
    module: vacation_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
