import { ApiPromise, WsProvider } from '@polkadot/api';

const endpoint = 'wss://rpc.polkadot.io';

export const connectApi = async (): Promise<ApiPromise> => {
  const provider = new WsProvider(endpoint);
  const api = await ApiPromise.create({ provider });

  return api;
};
