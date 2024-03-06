import { OneSignal } from 'react-native-onesignal'

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email)
}

export function tagCarUpdate(itemsCount: string) {
  OneSignal.User.addTag('car_items_count', itemsCount)
}
