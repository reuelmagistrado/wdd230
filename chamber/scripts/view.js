const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".company-cards-container");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

async function getResponse() {
  const response = await fetch("./json/data.json");
  if (response.ok) {
    const data = await response.json();
    displayCompanies(data);
  }
}

function displayCompanies(data) {
  const article = document.querySelector(".grid");

  data.companies.forEach((company) => {
    const image = document.createElement("img");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const para = document.createElement("p");
    const address = document.createElement("address");
    const address1 = document.createElement("address");
    const link = document.createElement("a");

    image.src = company.logo;
    image.alt = `${company.name} logo.`;
    h2.textContent = company.name;
    para.textContent = company.membershipLevel;
    address.textContent = company.address;
    address1.textContent = company.contact;
    link.href = company.url;
    link.target = "__blank";
    link.textContent = "Website";
    section.classList = "company-cards";
    section.append(image, h2, para, address, address1, link);
    article.append(section);
  });
}
getResponse();
