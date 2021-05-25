import { useSelector } from 'react-redux'
import Restaurants from './components/Restaurants'
import NavBar from './components/BottomNavBar'
import TopMenu from './components/TopMenu';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import AppRouting from './components/AppRouting';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#f44336'
		},
		secondary: {
			main: '#43a047'
		}
	}
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth='lg'>
				<TopMenu />
				<AppRouting>
					<Restaurants />
				</AppRouting>
				<NavBar />
			</Container>
		</ThemeProvider >
	)
}
export default App;
