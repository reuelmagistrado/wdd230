import {
  displayDate,
  menuBtn,
  toggleClose,
  displayYear,
  displayDateModified,
  displayBanner,
} from "../utils/commonUtils.js";

import {
  gridbutton,
  listbutton,
  display,
  showList,
  getResponse,
} from "../utils/companiesView.js";

displayDate();
menuBtn.addEventListener("click", toggleClose);
displayYear();
displayDateModified();
displayBanner();

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

getResponse();
