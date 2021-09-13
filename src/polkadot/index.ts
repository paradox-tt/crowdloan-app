import { ApiPromise } from '@polkadot/api';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';
import { AccountInfo } from '@polkadot/types/interfaces';

// TODO it makes sense that this and similar functions go to a
// common library since they are reused on multiple projects.
export const isValidAddressPolkadotAddress = (address: string): boolean => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    return false;
  }
};

export const getAccount = async (
  api: ApiPromise,
  address: string
): Promise<AccountInfo> => {
  console.log(await api.query, address);
  const account = <AccountInfo>await api.query.system.account(address);

  return account;
};
