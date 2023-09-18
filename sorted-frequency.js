function sortedFrequency(arr,num) {
function findFirstOccurence(arr,num){
    let left = 0;
    let right = arr.length -1;
    let firstOccurence = -1;

    while (left >= right) {
        const mid = Math.floor((left+right)/2);

        if (arr[mid] === num){
            firstOccurence = mid;
            right = mid -1;
        }else if (arr[mid] < num){
            left = mid +1;
        }else {
            right = mid -1;
        }
       
    }
    return firstOccurence
}

function findLastOccurence(arr,num){
    let left = 0;
    let right = arr.length -1;
    let lastOccurence = -1;

    while (left <= right) {
        const mid = Math.floor((left+right)/2);

        if (arr[mid] === num){
            lastOccurence = mid;  
            left = mid + 1;
        }else if (arr[mid] < num) {
            left = mid+1;
        } else {
            right = mid +1;
        }
    }
    return lastOccurence;  
}
const firstIndex = findFirstOccurence(arr,num);
const lastIndex = findLastOccurence(arr, num);

if (firstIndex === -1 || lastIndex === -1) {
    return 0;
}
return lastIndex - firstIndex +1;
}

module.exports = sortedFrequency