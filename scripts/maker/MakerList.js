import { Maker } from "./Maker.js";
import { guitarMakerArray } from "./MakerDataProvider.js";

//// // 1. Define the component module (invoke a function to initiate the process of building a list) 
//    2. import the data from the provider and define the copy of the array of objects into a new variable
//    2. pull the class where the HTML options are going (contentTarget)
//    3. Iterate the array of objects to convert each individual object into HTML strings (use of or in this case map array method)
//       a. create a new variable to represent the HTML conversion
//       b. call .map on the array of objects that you represented in a new variable
//       c. since .map takes a function define a parameter representing each object as you iterate through the array
//       d. pass a function with a parameter/variable that represents and individual object of the data array (each object as you interate through the array)
//       e. return (callback) the import of the HTML representation function via Guitar and give it the parameter/argument of an individual object you passed as a parameter of the function representing an individual object
//         notes: Returning an HTML representation of a guitar into a new array
//     4. For DropDown you must interpolate a "Select" menu as the contentTarget.innerHTML with Dropdown Notation to make a dropdown menu in the 
//     
//      TO ADD THE EVENTLISTER:
        // 1. Put the Caputure of the Browser-Generated Event
        //     A. add event-listener to the contentTarget (parent container for the dropdown)
        //     B. a browser generated event called a "change" happens when selecting on dropdown
        //     C. write function for what happens when that change occurs
        //        a. start with a if statement (changeEvent.target.classList.contains(classofeventthatschanging))
        //        b. make a new variable that is defined by the new custom event FUNCTION!
        //        c. you need to notate all the steps in the event listener function still.
                // D. Dispatch
const contentTarget = document.querySelector(".maker")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    // What Was Changed//
    if (changeEvent.target.classList.contains("manufacturerDropdown")) {
    //Let system know that a manufacturer was chosen
        const manSelected = new CustomEvent("manufacturerChosen", {
//Pass along details about which manufacturer was chosen.
        detail: {
            manufacturer: changeEvent.target.value
        }

})
    eventHub.dispatchEvent(manSelected)
    }
})
export const makerList = () => {
    const makerArray = guitarMakerArray()


const makerStringArray = makerArray.map(
    (makerObject) => {
        return Maker(makerObject)
    }

)

contentTarget.innerHTML = `
    <select class="manufacturerDropdown">
    ${makerStringArray.join("")}
    </select>

`

}

