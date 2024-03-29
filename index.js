import { walletData } from "./walletData.js";

const criteriaCheckbox = document.getElementById("criteria-checkbox");
const featureCheckbox = document.getElementById("feature-checkbox");
const userTypeRadio = document.getElementById("ux-radio");

// ================================================ USER TYPE ================================================

// Puts all the wallets their user type in one array.
function getUserTypeArray(wallets) {
  const userTypeArray = [];
  for (let wallet of wallets) {
    for (let userType of wallet.userType) {
      // if it does (!) NOT have duplicates execute this code.
      if (!userTypeArray.includes(userType)) {
        userTypeArray.push(userType);
      }
    }
  }
  return userTypeArray.sort();
}

// render out user type radio buttons
function renderUserTypeRadio(wallets) {
  let radioItems = ``;
  const userTypes = getUserTypeArray(wallets);
  for (let userType of userTypes) {
    radioItems += `<div class="radio-row">
    <label for="${userType}">${userType}</label>
    <input 
        class="radio-ux" 
        type="radio"
        id="${userType}"
        value="${userType}"
        name="userType"
        >
</div>`;
  }
  userTypeRadio.innerHTML = radioItems;
}

renderUserTypeRadio(walletData);

//sort wallets on user type filter

const wallets = walletData.filter(function (wallet) {
  return wallet.userType.includes("linux");
});

console.log(wallets);

// ================================================ CRITERIA ================================================

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
        name="criteria"
        >
</div>`;
  }
  criteriaCheckbox.innerHTML = checkboxItems;
}

renderCriteriaCheckbox(walletData);

// ================================================ FEATURES ================================================

// Puts all the wallets their features in one array.
function getFeatureArray(wallets) {
  const featureArray = [];
  for (let wallet of wallets) {
    for (let feature of wallet.features) {
      // if it does (!) NOT have duplicates execute this code.
      if (!featureArray.includes(feature)) {
        featureArray.push(feature);
      }
    }
  }
  return featureArray.sort();
}

// render out criteria checkbox buttons
function renderFeatureCheckbox(wallets) {
  let checkboxItems = ``;
  const features = getFeatureArray(wallets);
  for (let feature of features) {
    checkboxItems += `<div class="checkbox-row">
    <label for="${feature}">${feature}</label>
    <input 
        class="checkbox" 
        type="checkbox"
        id="${feature}"
        value="${feature}"
        name="feature"
        >
</div>`;
  }
  featureCheckbox.innerHTML = checkboxItems;
}

renderFeatureCheckbox(walletData);

//getCriteriaArray(walletData);

//============================================ TOGGLE DISPLAY NONE/BLOCK WHEN CLICKED ON SKIP HELPER BUTTON ===============================================
const btnSkipHelp = document.getElementById("btn-skip-help-toggle");

btnSkipHelp.addEventListener("click", function () {
  const hideGuide = document.getElementsByClassName("container");
  const showTable = document.getElementsByClassName("second-wrapper");

  for (let container of hideGuide) {
    container.classList.remove("visible");
    container.classList.add("hidden");
  }

  for (let table of showTable) {
    table.classList.remove("hidden");
    table.classList.add("visible");
  }
});

const btnUseHelp = document.getElementById("btn-use-help-toggle");

btnUseHelp.addEventListener("click", function () {
  const hideGuide = document.getElementsByClassName("container");
  const showTable = document.getElementsByClassName("second-wrapper");

  for (let container of hideGuide) {
    container.classList.remove("hidden");
    container.classList.add("visible");
  }

  for (let table of showTable) {
    table.classList.remove("visible");
    table.classList.add("hidden");
  }
});
