import grid from "./grid-poly";
import "./main.scss";

if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  console.log("in ie ");
  grid();
}
