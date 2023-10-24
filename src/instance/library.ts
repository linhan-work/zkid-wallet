import { BrowserSession, BrowserStore, DidAccounts, WalletKeyring, utils } from "@zcloak/wallet-lib";
export let didAccounts: DidAccounts;
export let keyring: WalletKeyring;
export let store: BrowserStore;
export let session: BrowserSession;

export async function init() {
  store = new BrowserStore();
  session = new BrowserSession();

  keyring = new WalletKeyring(store, session);
  await keyring.isReady;

  didAccounts = new DidAccounts(keyring, store, session);

  await didAccounts.isReady;

  // const mnemonic = utils.mnemonic.mnemonicGenerate(12);

  // const account = await didAccounts.generate(mnemonic, "123");

  // didAccounts.setCurrent(account.instance.id);
}
