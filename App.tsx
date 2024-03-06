import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'

import { THEME } from './src/theme'
import { Loading } from './src/components/Loading'
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal'

import { CartContextProvider } from './src/contexts/CartContext'
import { useEffect } from 'react'

OneSignal.initialize('3428a648-70b0-4dae-9f66-9a7cd053da64')
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent) => {}

    OneSignal.Notifications.addEventListener('click', handleNotificationClick)

    return () => {
      OneSignal.Notifications.removeEventListener(
        'click',
        handleNotificationClick
      )
    }
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  )
}
