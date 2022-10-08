import React from "./_snowpack/pkg/react.js";
class App extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ React.createElement("h1", {
      style: {textAlign: "center", backgroundColor: "rgba(245, 245, 220, .8)"}
    }, "Welcome to GitHub(by) Express!!!"), /* @__PURE__ */ React.createElement("p", {
      style: {textAlign: "center", border: "2px solid", color: "black", backgroundColor: "rgba(245, 245, 220, .8)"}
    }, "Welcome to the newest social media platform to get to know other coders and start new bonds and relationships."), /* @__PURE__ */ React.createElement("p", {
      style: {textAlign: "center", border: "2px solid", color: "black", backgroundColor: "rgba(245, 245, 220, .8)"}
    }, "Please input your login information. If you do not have an account, please create simply a new account."), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "user"
    }, "Username:"), /* @__PURE__ */ React.createElement("input", {
      type: "text",
      id: "user",
      name: "username"
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
      for: "pass"
    }, "Password:"), /* @__PURE__ */ React.createElement("input", {
      type: "password",
      id: "pass",
      name: "password",
      minlength: "8",
      required: true
    })), /* @__PURE__ */ React.createElement("button", {
      id: "loginBtn"
    }, "Login")), /* @__PURE__ */ React.createElement("a", {
      href: "/github"
    }, /* @__PURE__ */ React.createElement("button", {
      id: "githubLog"
    }, "Login In With GitHub")), /* @__PURE__ */ React.createElement("script", {
      src: "/login.js"
    }));
  }
}
export default App;
