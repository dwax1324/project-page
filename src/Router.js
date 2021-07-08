import { HashRouter, Route, Switch } from "react-router-dom"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Card from "./components/Card"

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/card" component={Card} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
            </Switch>
        </HashRouter>
    )
}

export default Router