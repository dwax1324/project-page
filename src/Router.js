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
                <Route exact path="/admin">
                    <Admin />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/card">
                    <Card />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Router