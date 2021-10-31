import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Home from './pages/Home'
import theme from './theme'
import './theme/styles.css'

const App: React.FC = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <Container maxWidth="container.xl">
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/home">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </ChakraProvider>
    )
}
export default App
