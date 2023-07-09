const THEME_GRID_STEP = 8;

export const darkTheme = {
  name: 'dark',
  palette: {
    background: {
      primary: '#fff',
      secondary: '#D2E9FE',
    },
    text: {
      primary: '#1040B5',
      secondary: '#fff',
    },
    accent: {
      'color-primary-100': '#CCFBD5',
      'color-primary-200': '#9BF8B6',
      'color-primary-300': '#68EC9A',
      'color-primary-400': '#41D98B',
      'color-primary-500': '#0DC176',
      'color-primary-600': '#09A574',
      'color-primary-700': '#068A6E',
      'color-primary-800': '#046F63',
      'color-primary-900': '#025C5B',
      'color-success-100': '#DBFCD5',
      'color-success-200': '#B1FAAC',
      'color-success-300': '#80F182',
      'color-success-400': '#5EE36E',
      'color-success-500': '#2ED151',
      'color-success-600': '#21B34E',
      'color-success-700': '#17964A',
      'color-success-800': '#0E7944',
      'color-success-900': '#08643F',
      'color-info-100': '#D2E9FE',
      'color-info-200': '#A5D0FE',
      'color-info-300': '#79B4FE',
      'color-info-400': '#579AFD',
      'color-info-500': '#2071FC',
      'color-info-600': '#1757D8',
      'color-info-700': '#1040B5',
      'color-info-800': '#0A2C92',
      'color-info-900': '#061F78',
      'color-warning-100': '#FFF7CC',
      'color-warning-200': '#FFED99',
      'color-warning-300': '#FFE067',
      'color-warning-400': '#FFD341',
      'color-warning-500': '#FFBF02',
      'color-warning-600': '#DB9E01',
      'color-warning-700': '#B77F01',
      'color-warning-800': '#936300',
      'color-warning-900': '#7A4E00',
      'color-danger-100': '#FFDFD7',
      'color-danger-200': '#FFB7AF',
      'color-danger-300': '#FF8887',
      'color-danger-400': '#FF6976',
      'color-danger-500': '#FF385C',
      'color-danger-600': '#DB285A',
      'color-danger-700': '#B71C55',
      'color-danger-800': '#93114E',
      'color-danger-900': '#7A0A49',
    },
  },
  typography: {
    title: {
      size: '24px',
      fontFamily: 'ROBOTO_LIGHT',
      letterSpacing: '0px',
    },
    subtitle: {
      size: '16px',
      fontFamily: 'ROBOTO_MEDIUM',
      letterSpacing: '0.15px',
    },
    body16: {
      size: '16px',
      fontFamily: 'ROBOTO_REGULAR',
      letterSpacing: '0.5px',
    },
    caption: {
      size: '12px',
      fontFamily: 'ROBOTO_LIGHT',
      letterSpacing: '0.4px',
    },
  },
  spacing: (multiplier: number) => THEME_GRID_STEP * multiplier,
};
