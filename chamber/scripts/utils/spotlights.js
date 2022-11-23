const spotlights = document.querySelector(".spotlights");

export async function getResponse() {
  const response = await fetch("./json/data.json");

  if (response.ok) {
    const data = await response.json();
    const chosenCompanies = chooseCompanies(data);
    for (let i = 0; i < 3; i++) {
      const section = document.createElement("section");
      const divHead = document.createElement("div");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      const divBody = document.createElement("div");
      const text = document.createElement("p");
      const contact = document.createElement("div");
      const email = document.createElement("address");
      const phone = document.createElement("address");
      const website = document.createElement("address");
      const link = document.createElement("a");

      divHead.classList.add("spotlight__head");

      h3.classList.add("spotlights__title");
      h3.textContent = chosenCompanies[i].name;

      img.src = chosenCompanies[i].logo;
      img.alt = `${chosenCompanies[i].name} logo`;

      divBody.classList.add("spotlight__body");
      text.classList.add("spotlights__text");
      text.textContent = chosenCompanies[i].slogan;

      contact.classList.add("spotlights__contact");

      email.textContent = `hello@${chosenCompanies[i].name}.com`;
      phone.textContent = chosenCompanies[i].contact;
      link.classList.add("spotlight__link");
      link.href = chosenCompanies[i].url;
      link.setAttribute("target", "_blank");
      link.textContent = "Website";

      website.append(link);
      contact.append(email, phone, website);
      divBody.append(text, contact);
      divHead.append(h3, img);
      section.append(divHead, divBody);
      spotlights.append(section);
    }
  }
}

function chooseCompanies(data) {
  let companyArr = [];
  data.companies.forEach((company) => {
    if (
      company.membershipLevel === "Silver" ||
      company.membershipLevel === "Gold"
    ) {
      companyArr.push(company);
    }
  });
  const shuffled = [...companyArr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}
