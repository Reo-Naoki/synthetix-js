const HavvenJs = require('../src/index');
const havjs = new HavvenJs();

test('Should return getHavvensReceivedForEther for 1 ETH', async () => {
  const havvensReceivedForEther = await havjs.Converter.getHavvensReceivedForEther(havjs.util.parseEther('1'));
  return expect(havjs.utils.formatEther(havvensReceivedForEther)).toBeTruthy();
});