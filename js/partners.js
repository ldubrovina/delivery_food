const renderItems = (data) => {
  console.log(data);
};
fetch(
  "https://delivery-food-91eaa-default-rtdb.firebaseio.com/db/partners.json"
)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {});
