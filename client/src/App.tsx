import React from 'react'
import {
	Route,
	Switch,
	Link,
	withRouter,
	BrowserRouter,
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Layout, Menu, Breadcrumb, Button } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import Launches from './components/Launches'
import Home from './components/Home'
import Rockets from './components/Rockets'

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
})

const { Header, Content, Footer } = Layout

export interface AppProps {}

const Main = () => {
	return (
		<Layout className='layout'>
			<Header>
				<div className='logo' />
				<Menu theme='dark' mode='horizontal'>
					<Menu.Item key='1'>
						<Link to='/'>Home</Link>
					</Menu.Item>
					<Menu.Item key='2'>
						<Link to='/launches'>Launches</Link>
					</Menu.Item>
					<Menu.Item key='3'>
						<Link to='/rockets'>Rockets</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/launches' component={Launches} />
					<Route path='/rockets' component={Rockets} />
				</Switch>
			</Content>
			<Footer style={{ textAlign: 'center' }}>SpaceX Launches 2020</Footer>
		</Layout>
	)
}

const App: React.SFC<AppProps> = () => {
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Main />
			</ApolloProvider>
		</BrowserRouter>
	)
}

export default App
