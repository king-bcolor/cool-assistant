import cssText from "data-text:~style.css"
import { OverlayLayer } from "~components/OverlayLayer"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText;
  console.log(style.textContent,cssText,'show css');
  
  return style
}

const ViewLayer = () => {
    return  <OverlayLayer />
  }
   
  export default ViewLayer