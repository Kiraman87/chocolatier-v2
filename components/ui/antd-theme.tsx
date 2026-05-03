'use client'

import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

// Custom theme matching the chocolatier luxury design
const theme = {
  token: {
    // Colors
    colorPrimary: '#c9a962',       // Gold accent
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    
    // Text
    colorText: '#1a1a1a',
    colorTextSecondary: '#6b6b6b',
    colorTextTertiary: '#8c8c8c',
    
    // Backgrounds
    colorBgContainer: '#ffffff',
    colorBgElevated: '#faf8f5',
    colorBgLayout: '#faf8f5',
    
    // Border
    colorBorder: '#e8e4df',
    
    // Fonts
    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
    fontSize: 14,
    
    // Border radius - minimal for luxury feel
    borderRadius: 0,
    borderRadiusSM: 0,
    borderRadiusLG: 0,
    
    // Spacing
    controlHeight: 40,
    padding: 16,
    paddingLG: 24,
    
    // Motion
    motionUnit: 0.1,
    motion: true,
  },
  components: {
    Button: {
      borderRadius: 0,
      paddingInline: 32,
      paddingBlock: 12,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    Card: {
      borderRadius: 0,
      padding: 24,
    },
    Input: {
      borderRadius: 0,
      paddingInline: 16,
      controlHeight: 48,
    },
    Table: {
      borderRadius: 0,
      headerBg: '#faf8f5',
      headerColor: '#1a1a1a',
      rowHoverBg: '#f5f0e8',
    },
    Menu: {
      itemSelectedColor: '#c9a962',
      itemHoverColor: '#1a1a1a',
    },
    Select: {
      borderRadius: 0,
      controlHeight: 48,
    },
    DatePicker: {
      borderRadius: 0,
      controlHeight: 48,
    },
  },
}

export function AntdThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  )
}
