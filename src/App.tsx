import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './style/themes/default';
import { GlobalStyle } from './style/global';
import { Home } from './pages/Home';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
