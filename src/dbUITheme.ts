import { deDE as coreDeDE } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const dbUITheme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobile: 0,
        tablet: 768,
        desktop: 1200,
      },
    },
    // typography: {
    //   fontFamily: "db_sans, sans-serif",
    // },
  },
  coreDeDE
);
