import React from "react";

class App extends React.Component {
    // render component HTML using JSX
    render() {
        return (
            <div className="App">
                <h1 style={{textAlign: "center", backgroundColor: "rgba(245, 245, 220, .8)"}}>Welcome to GitHub(by) Express!!!</h1>
                <p style={{textAlign: "center", border: "2px solid", color:"black", backgroundColor: "rgba(245, 245, 220, .8)"}}>Welcome to the newest social media platform to get to know other coders and start new bonds and relationships.</p>
                <p style={{textAlign: "center", border: "2px solid", color:"black", backgroundColor: "rgba(245, 245, 220, .8)"}}>Please input your login information. If you do not have an account, please create simply a new account.</p>
                <form>
                    <div>
                        <label for="user">Username:</label>
                      <input type="text" id="user" name="username" />
                    </div>
                    <div>
                        <label for="pass">Password:</label>
                         <input type="password" id="pass" name="password" minlength="8" required />
                    </div>
                    <button id="loginBtn">Login</button>
                 </form>
                 <a href="/github"><button id = "githubLog">Login In With GitHub</button></a>
                <script src="/login.js"></script>

            </div>
        )
    }
}
export default App;