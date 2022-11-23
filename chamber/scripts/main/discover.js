import {
  displayDate,
  menuBtn,
  toggleClose,
  displayYear,
  displayDateModified,
  displayBanner,
} from "../utils/commonUtils.js";

import { lazyLoad } from "../utils/lazyloading.js";

import { displayVisits } from "../utils/visits.js";

displayDate();
menuBtn.addEventListener("click", toggleClose);
displayYear();
displayDateModified();
displayBanner();

lazyLoad();
displayVisits();
