import {
  displayDate,
  menuBtn,
  toggleClose,
  displayYear,
  displayDateModified,
  displayBanner,
} from "../utils/commonUtils.js";

import { apiFetch } from "../utils/weather.js";

displayDate();
menuBtn.addEventListener("click", toggleClose);
displayYear();
displayDateModified();
displayBanner();

apiFetch();
