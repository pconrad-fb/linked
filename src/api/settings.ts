import { Store } from '@tauri-apps/plugin-store';

const store = new Store('store.bin');

await store.set('some-key', { value: 5 });
const val = await store.get('some-key');
console.log(val); // { value: 5 }