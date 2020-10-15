import { getDefaultProvider } from 'ethers';
import * as snx from 'synthetix';
import { OptimismProvider } from '@eth-optimism/provider';
import { SynthetixJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    describe(network, () => {
      let snxjs;
      beforeAll(() => {
        const provider = new OptimismProvider('https://goerli.optimism.io', getDefaultProvider());
        snxjs = new SynthetixJs({ networkId, provider });
      });

      Object.entries(contracts).forEach(([contract, settings]) => {
        describe(contract, () => {
          test(`${network} Should have correct address `, () => {
            () => {
              const targetContract =
                typeof settings === 'object' ? settings.target || contract : contract;

              expect(snxjs[contract].contract.address).toEqual(
                snx.getTarget({ network, contract: targetContract, useOvm: true }).address
              );
            };
          });

          test(`${network} Should have correct ABI`, () => {
            () => {
              const source = typeof settings === 'object' ? settings.source || contract : contract;

              expect(snxjs[contract].contract.interface.abi).toEqual(
                snx.getSource({ network, contract: source, useOvm: true }).abi
              );
            };
          });
        });
      });
    });
  });
});
