import { walletData } from "./walletData.js";

// Puts all the wallets their operating system arrays in one array.
function getOperatingSystemArray(wallets) {
  const operatingsystemArray = [];
  for (let wallet of wallets) {
    for (let operatingsystem of wallet.operatingSystem) {
      operatingsystemArray.push(operatingsystem);
    }
  }
  console.log(operatingsystemArray);
}

function renderOperatingSystemRadios(wallets) {
  let radioItems = ``;
  const operatingSystems = getOperatingSystemArray(wallets);
  for (let operatingsystem of operatingSystems) {
    radioItems += `<input type="radio" id="${operatingsystem}" value="${operatingsystem}" name="operatingSystems"`;
  }
}

getOperatingSystemArray(walletData);
