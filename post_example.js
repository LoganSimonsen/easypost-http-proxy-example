function createAddress() {
  let name = document.getElementById("name").value || "";
  let street = document.getElementById("street").value || "";
  let city = document.getElementById("city").value || "";
  let zip = document.getElementById("zip").value || "";
  let state = document.getElementById("state").value || "";
  let country = document.getElementById("country").value || "";
  let address = {
    name: name,
    street1: street,
    city: city,
    state: state,
    zip: zip,
    country: country,
  };
  axios
    .post("http://localhost:3000/addresses", {
      address: address,
      verify: true,
    })
    .then(function (response) {
      // handle success
      let r = response.data;
      let resultsDiv = document.getElementById("results");
      let output = `<br><h3>Result Details from EasyPost</h3><br>
      <div>USPS Verified Deliverable: ${r.verifications.delivery.success}</div><br><div>Full Results:</div>`;
      resultsDiv.innerHTML = output;
      renderjson.set_show_to_level(5);
      resultsDiv.appendChild(renderjson(r));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
