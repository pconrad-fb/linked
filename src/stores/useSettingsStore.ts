import {defineStore} from 'pinia'
import {Store} from "@tauri-apps/plugin-store";

export const useSettingsStore = defineStore('settings', () => {
  const store = new Store('store.bin');

  async function writeSetting(key: string, value: any) {
    await store.set(key, value);
  }

  async function readSetting(key: string) {
    return await store.get(key);
  }

  return {writeSetting, readSetting}
})