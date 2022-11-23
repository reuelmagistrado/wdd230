import {
  displayDate,
  menuBtn,
  toggleClose,
  displayYear,
  displayDateModified,
  displayBanner,
} from "../utils/commonUtils.js";

displayDate();
menuBtn.addEventListener("click", toggleClose);
displayYear();
displayDateModified();
displayBanner();
