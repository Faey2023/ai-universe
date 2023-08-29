const loadFunction = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const products = data.data.tools;
  displayProducts(products);
};
//
const displayProducts = (products) => {
  const mainContainer = document.getElementById("main-container");
  products.forEach((product) => {
    console.log(product);
    const mainCard = document.createElement("div");
    mainCard.classList = `card w-96 bg-base-100 shadow-xl`;
    mainCard.innerHTML = `
    <div class="">
  <figure class="px-10 pt-10">
    <img src="${product.image} " alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-right ml-6">
    <h2 class="card-title">Features</h2>
    <ol class="list-decimal">
      <li>${product.features[0]}</li>
      <li>${product.features[1]}</li>
      <li>${product.features[2]}</li>
    </ol>
    <hr />
    
    <div class="flex justify-between">
    <h2 class="card-title">${product.name}</h2>
    <button class="btn btn-circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
        stroke="#EB5757"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
    </div>
  </div>
</div>
    `;
    mainContainer.appendChild(mainCard);
  });
};
loadFunction();
