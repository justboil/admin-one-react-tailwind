import { useDispatch } from "react-redux";
import { styleKey } from "../../src/config";
import { setStyle } from "../../src/stores/styleSlice";

export default function GlobalStyle() {
  const dispatch = useDispatch();
  
  dispatch(setStyle(
    typeof localStorage !== "undefined" && localStorage[styleKey] ? localStorage[styleKey] : "basic"
  ));

  return null;
}