let accounts = [];
let enabledAccounts = [];

function onPageLoad() {
  axios
    .get("http://localhost:3000/carrier_accounts")
    .then(function (response) {
      // handle success
      accounts = response.data;
      console.log(accounts);
      enabledAccounts = [];
      for (i = 0; i < accounts.length; i++) {
        document.getElementById(
          "tableBody"
        ).innerHTML += `<tr><td>${accounts[i].id}</td><td>${accounts[i].type}</td><td>${accounts[i].description}</td><td>${accounts[i].billing_type}</td></tr>`;
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function suspendAccount(caid) {
  document.getElementById("tableBody").innerHTML = "";
  axios
    .patch(`http://localhost:3000/carrier_accounts/${caid}`, {
      description: "Suspended",
    })
    .then(function (response) {
      // handle success
      onPageLoad();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function enableAccount(caid) {
  document.getElementById("tableBody").innerHTML = "";
  axios
    .patch(`http://localhost:3000/carrier_accounts/${caid}`, {
      description: "Enabled",
    })
    .then(function (response) {
      // handle success
      onPageLoad();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
