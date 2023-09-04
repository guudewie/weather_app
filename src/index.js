import dom from "./modules/dom";
import weather from "./modules/api";

window.addEventListener("load", async () => { 

    const data = await weather.getData("Berlin");
    dom.populateApp(data);
    dom.searchListener();
    dom.tempUnitListner();
 })
