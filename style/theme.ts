import { createTheme } from "@shopify/restyle";

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',
  
    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    orangeLightest:'#FFD07F',
    orangeLight:'#FDA65D',
    orangePrimary:'#FF8243',
    orangeDark:'#E26A2C',

    blueDark:'#2155CD',
    bluePrimary:'#0AA1DD',
    blueLight:'#79DAE8',
    blueLightest:'#E8F9FD',

    greyLightest:'#F6F5F5',
    greyDark:"#738598",
  
    zBlack:'#000000',
    black: '#0B0B0B',
    white: '#FFFFFF',
  };
  
  const theme = createTheme({
    colors: {
      mainBackground: palette.greyLightest,
      whiteBackground:palette.white,
      primaryBackground:palette.orangeDark,
      darkText:palette.black,
      greyText:palette.greyDark,
      whiteText:palette.white,
      zBlack:palette.zBlack,
      primaryCardBackground:palette.orangeLight,
      secondaryCardBackground:palette.white,
    },
    spacing: {
      '-s':-8,
      '-m':-16,
      '-l':-24,
      '-xl':-32,
      '-xxl':-40,
      s: 8,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 40,
    },
    breakpoints: {
      phone: 0,
      tablet: 768,
    },
    textVariants: {
      header: {
        fontSize:34,
        fontWeight: 'bold',
        lineHeight: 42.5,
        color: 'darkText',
      },
      subheader: {
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 36,
        color: 'darkText',
      },
      body: {
        fontSize: 16,
        lineHeight: 24,
        color: 'darkText',
      },
    },
    cardVariants: {
      primary: {
        backgroundColor: 'primaryCardBackground',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
      },
      secondary: {
        backgroundColor: 'secondaryCardBackground',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
      },
    }
  });
  
  export type Theme = typeof theme;
  export default theme;