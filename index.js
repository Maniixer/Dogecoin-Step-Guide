import { walletData } from "./walletData.js";

const criteriaCheckbox = document.getElementById("criteria-checkbox");

// Puts all the wallets their criteria in one array.
function getCriteriaArray(wallets) {
  const criteriaArray = [];
  for (let wallet of wallets) {
    for (let criteria of wallet.criteria) {
      // if it does (!) NOT have duplicates execute this code.
      if (!criteriaArray.includes(criteria)) {
        criteriaArray.push(criteria);
      }
    }
  }
  return criteriaArray.sort();
}

// render out criteria checkbox buttons
function renderCriteriaCheckbox(wallets) {
  let checkboxItems = ``;
  const criterias = getCriteriaArray(wallets);
  for (let criteria of criterias) {
    checkboxItems += `<div class="checkbox-row">
    <label for="${criteria}">${criteria}</label>
    <input 
        class="checkbox" 
        type="checkbox"
        id="${criteria}"
        value="${criteria}"
        name="emotions"
        >
</div>`;
  }
  criteriaCheckbox.innerHTML = checkboxItems;
}

renderCriteriaCheckbox(walletData);

//getCriteriaArray(walletData);
