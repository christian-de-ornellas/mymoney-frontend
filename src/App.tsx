import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from './theme'
import './theme/styles.css'
import Navbar from './components/Navbar'
import DarkModeToggle from './components/DarkModeToggle'
import Investments from './pages/Investments'
import Revenues from './pages/Revenues/index'
import Payments from './pages/Payments'
import Graphics from './pages/Graphics/index'
import Dashboard from './pages/Dashboard/index'

const App: React.FC = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxWidth="container.xl" padding={10}>
                <Router>
                    <Navbar />
                    <DarkModeToggle />
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>

                        <Route path="/investments">
                            <Investments />
                        </Route>
                        <Route path="/revenues">
                            <Revenues />
                        </Route>
                        <Route path="/payments">
                            <Payments />
                        </Route>
                        <Route path="/graphics">
                            <Graphics />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </ChakraProvider>
    )
}
export default App
