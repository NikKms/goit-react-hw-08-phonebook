import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light', // Изначальный режим цветов - светлый
    useSystemColorMode: false, // Не использовать системный режим цветов
  },
  colors: {
    // Светлая тема
    light: {
      textPrimary: '#333333', // Основной цвет текста
      titlePrimary: '#008080', // Основной цвет заголовков
      accentHover: '#FF5733', // Акцентный цвет для ховера
      headerSecondary: '#FFC300', // Вспомогательный цвет, используемый только в хедере
      background: '#F9F9F9', // Фон приложения (однотонный, кроме футера)
      footerBackground: '#EDEDED', // Фон футера
      buttonAddContact: '#00A300', // Цвет кнопки "Добавить контакт"
      buttonAddContactHover: '#00C900', // Цвет кнопки "Добавить контакт" при ховере
      buttonDeleteContact: '#A30000', // Цвет кнопки "Удалить контакт"
      buttonDeleteContactHover: '#C90000', // Цвет кнопки "Удалить контакт" при ховере
      headerButton: '#333333', // Цвет кнопок навигации под цвет текста хедера
    },
    // Темная тема
    dark: {
      textPrimary: '#EAEAEA', // Основной цвет текста
      titlePrimary: '#00B3B3', // Основной цвет заголовков
      accentHover: '#FFB273', // Акцентный цвет для ховера
      headerSecondary: '#FFD700', // Вспомогательный цвет, используемый только в хедере
      background: '#121212', // Фон приложения (однотонный, кроме футера)
      footerBackground: '#1C1C1C', // Фон футера
      buttonAddContact: '#00A300', // Цвет кнопки "Добавить контакт"
      buttonAddContactHover: '#00C900', // Цвет кнопки "Добавить контакт" при ховере
      buttonDeleteContact: '#A30000', // Цвет кнопки "Удалить контакт"
      buttonDeleteContactHover: '#C90000', // Цвет кнопки "Удалить контакт" при ховере
      headerButton: '#EAEAEA', // Цвет кнопок навигации под цвет текста хедера
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif', // Шрифт для заголовков
    body: 'Roboto, sans-serif', // Шрифт для основного текста
  },
  shadows: {
    // Определите стили тени здесь
    card: '0 2px 4px rgba(0, 0, 0, 0.2)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  space: {
    // Определите значения отступов и полей здесь
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radius: {
    // Определите значения радиуса границы здесь
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  animations: {
    // Определите стили анимации здесь
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
});

export default customTheme;
