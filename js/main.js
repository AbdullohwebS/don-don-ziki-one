import { elHands } from "./html-Element.js";
import { sectionSwapper } from "./section-swapper-.js";
import { uiChanger } from "./ui-changer.js";
import { elrefreshGame } from "./html-Element.js";
import { robotChooser } from "./robot-chooser.js";
import { refresh } from "./refresh-game.js";

elHands.forEach((element) => {
  element.addEventListener("click", function (e) {
    uiChanger(e.target.alt);
    sectionSwapper(true);
  });
});

// refresh Game
elrefreshGame.addEventListener("click", function () {
  refresh();
});

robotChooser();