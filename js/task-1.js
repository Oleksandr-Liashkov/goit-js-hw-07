const categories = document
  .getElementById("categories-list")
  .getElementsByClassName("cat-list-item");

console.log(`Number of categories:`, String(categories.length));

const subCategories = document.querySelectorAll(
  "#categories-list .cat-list-item"
);

subCategories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
