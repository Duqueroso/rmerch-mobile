import { STORAGE_KEYS } from "@/constants/storage.keys";
import * as SecureStore from "expo-secure-store";

export const saveToken = (token: string) =>
  SecureStore.setItemAsync(STORAGE_KEYS.TOKEN, token);

export const getToken = () => SecureStore.getItemAsync(STORAGE_KEYS.TOKEN);

export const deleteToken = () =>
  SecureStore.deleteItemAsync(STORAGE_KEYS.TOKEN);
