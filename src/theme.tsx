import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    brand?: PaletteColor;
  }

  interface PaletteOptions {
    brand?: PaletteColorOptions;
  }
}
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    brand: {
      main: '#5cb85c',
    },
  },
});

export default theme;
