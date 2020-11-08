import Navbar from "./components/layout/navbar/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/alert/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { GithubProvider } from "./context/githubContext";
import { AlertProvider } from "./context/alertContext";
import NotFound from "./pages/NotFound";

const App = () => (
    <GithubProvider>
        <AlertProvider>
            <BrowserRouter>
                <Navbar />
                <div className="container">
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/user/:login" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertProvider>
    </GithubProvider>
);

export default App;
