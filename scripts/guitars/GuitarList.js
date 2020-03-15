import { Guitar } from "./Guitar.js";
import { guitarArray } from "./GuitarDataProvider.js";

// // 1. Define the component module (invoke a function to initiate the process of building a list) 
//    2. import the data from the provider and define the copy of the array of objects into a new variable
//    2. pull the class where the HTML options are going (contentTarget)
//    3. Iterate the array of objects to convert each individual object into HTML strings (use of or in this case map array method)
//       a. create a new variable to represent the HTML conversion
//       b. call .map on the array of objects that you represented in a new variable
//       c. since .map takes a function define a parameter representing each object as you iterate through the array
//       d. pass a function with a parameter/variable that represents and individual object of the data array (each object as you interate through the array)
//       e. return (callback) the import of the HTML representation function via Guitar and give it the parameter/argument of an individual object you passed as a parameter of the function representing an individual object
//         notes: Returning an HTML representation of a guitar into a new array
//     4. use contentTarget.innerHTML and .join("") to turn the HTML representation of objects into one giant string
//       
    // Filtering:
    //     1. Add eventHub under contentTarget
    //     2. Add eventListener with the variable that is changing  (manufacturer chosen)
    //        and a customEvent function
    //     3. Add a filter for what happens when the event takes place
    //         a. declare the array of what is being changed with the eventListener
    //         b. create a function with the array method being used (.filter in this case)
    //         contentTarget. 
   const contentTarget = document.querySelector(".guitar")
   const eventHub = document.querySelector(".container")

   eventHub.addEventListener("manufacturerChosen", customEvent => {
    const guitarDataArray = guitarArray()

      const filteredGuitars =  guitarDataArray.filter(
            (guitarObject) => {
                if (guitarObject.make === customEvent.detail.manufacturer) {
                  return true
                }
                return false
            }
        )

        const guitarStringArray = filteredGuitars.map(
            (guitarObject) => {
                return Guitar(guitarObject)
            }
        ) 
        
        contentTarget.innerHTML = guitarStringArray.join("")
        
    
    
   }
   )

   export const GuitarList = () => {
    const guitarDataArray = guitarArray()

    const guitarStringArray = guitarDataArray.map(
        (guitarObject) => {
            return Guitar(guitarObject)
        }
    ) 
    
    contentTarget.innerHTML = guitarStringArray.join("")
    }

