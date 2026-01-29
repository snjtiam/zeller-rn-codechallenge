import { TextStyle } from 'react-native'

export const typography: Record<'title' | 'section' | 'body' | 'secondary' | 'caption', TextStyle> = {
    title: {
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
    },
    section: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 22,
    },
    body: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    secondary: {
      fontSize: 13,
      fontWeight: '400',
      lineHeight: 18,
      color: '#6B7280',
    },
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
  };