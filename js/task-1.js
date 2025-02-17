const categoryNumbers = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryNumbers.length}`);

categoryNumbers.forEach(categoryNumber => {
  const categoryTitle = categoryNumber.querySelector(`h2`).textContent;
  const elements = categoryNumber.querySelectorAll(`li`).length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elements}`);
});
