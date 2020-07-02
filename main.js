// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback){
    for (let index = 0; index < array.length; index = index + 1){
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}

// complete the functions below so that they mimic the built in methods
function newSome(array, argument) {
    for (const element of array){
        if (argument(element)){return true}
    }
    return false
}

function newEvery(array, argument) {
    for (const element of array){
        if (!argument(element)){return false}
    }
    return true
}

function newFind(array, argument) {
    for (const element of array){
        if (argument(element)){return element}
    }
}

function newFindIndex(array, argument) {
    for (let i = 0; i < array.length; i++){
        if(argument(array[i])){return i}
    }
    return -1
}

function newMap(array, argument) {
    let out = []
    for(const element of array){out.push(argument(element))}
    return out
}

function newFilter(array, argument) {
    let out = []
    for(const element of array){
        if (argument(element)){
            out.push(element)
        }
    }
    return out
}