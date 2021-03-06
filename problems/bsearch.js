 /*******************************************************************
While you are working on the following problems, it DEFINITELY HELPS to
visualize these things in action, so use the below arrays as example inputs.

[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*******************************************************************/


/*******************************************************************
BINARY SEARCH VERSION 1:

Write a Recursive Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const recurBSearch = (nums, targetNum) => {

  if (nums.length === 0){
  return false;
  }

  let mid = Math.floor(nums.length/2);


  let front = nums.slice(0, mid);
  let rear = nums.slice(mid + 1);

  // console.log(mid, front, rear, nums[mid])

  if (targetNum < nums[mid]){
    return recurBSearch(front, targetNum);
  } else if (targetNum > nums[mid]){
    return recurBSearch(rear, targetNum);
  } else if (targetNum === nums[mid]){
    return true;
  }
}

// console.log(recurBSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7))

/*******************************************************************
BINARY SEARCH VERSION 2:

Write an Iterative Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const iterBSearch = (nums, targetNum) => {
  // Save references to indices at the beginning, middle, and end of the array
  // into variables: lowerIdx, midIdx, and upperIdx
  // while the lowerIdx is less than or equal to the upperIdx, there are still
  // values to be searched
  // reassign the midIdx to the the middle of the new lower and upper indices
  // Hint: This is the sum of lower and upper, divided by 2

  // if targetNum is larger than the value in the middle, we know targetNum is
  // not between the current lower and current middle, so reassign the lowerIdx
  // to the middle (ie cut off the left half of the array)
  let lowerIdx = 0;
  let upperIdx = nums.length - 1;
  let middleIdx;

  if (targetNum > nums[nums.length - 1] || targetNum < nums[0]) {
    return false;
  }

  while (lowerIdx <= upperIdx) {
    middleIdx = Math.floor((lowerIdx + upperIdx)/2);

    // console.log(lowerIdx, middleIdx, upperIdx, nums)
    if (targetNum > nums[middleIdx]) {
      lowerIdx = middleIdx + 1;
    } else if (targetNum < nums[middleIdx]) {
      upperIdx = middleIdx - 1;
    } else {
      return true;
    }
  }
  return false;

  // if targetNum is less than the value in the middle, we know targetNum is not
  // between the current upper and current middle, so reassign the upperIdx
  // to the middle (ie cut off the right half of the array)

  // if it's not greater than or less than (ie 'else'), we have found our target
  // at the midIdx and can return true and stop iterating.

  // if we finish our while loop and haven't returned true, we've looked over
  // the entire array and didn't find targetNum, so return false
}
// console.log(iterBSearch(arr1, 7))


/*******************************************************************
BINARY SEARCH VERSION 3:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const recurBSearchIdx = (nums, targetNum) => {
  let original = nums
  // this implementation is identical to version 1, except rather than
  // returning true/false, return the index where you found the item
  // (instead of true) or -1 (instead of false).

  if (nums.length === 0){
    return -1;
    }
  
    let midIdx = Math.floor(nums.length/2);
  
  
    let front = nums.slice(0, midIdx);
    let rear = nums.slice(midIdx + 1);
  
    console.log(midIdx, front, rear, nums[midIdx], "targetNum: " + targetNum)
  
    if (targetNum < nums[midIdx]){
      return recurBSearchIdx(front, targetNum);
    } else if (targetNum > nums[midIdx]){
      return recurBSearchIdx(rear, targetNum);
    } else if (targetNum === nums[midIdx]){
      console.log("midIndex: " + midIdx);
      console.log("Index of nums: " + nums.indexOf(targetNum))
      // console.log("original array: " + originalArr);
      return arr1.indexOf(targetNum);
    }

  // HINT: the index value you return should be the index in the ORIGINAL array
  // and not the index of the sliced array. You'll notice this problem arise
  // on the 'right half' recursion. in that, try saving the return value of the
  // recursive call into a variable, and adding it to the current stack-frame's
  // midIdx + 1.
}

recurBSearchIdx(arr1, 2)


/*******************************************************************
BINARY SEARCH VERSION 4:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdxV2 = (nums, targetNum, low = null, hi = null) => {
  /*
  This implementation is recursive, but borrows the low/hi logic from Version 2
  to establish a different base case. Rather than shrinking the array until its
  length is 0, this implementation moves low and hi indices to determine
  what part of the original array is being searched. if they meet each other
  we know we have searched the entire array.(NOTE this function has FOUR params)

  Base Case:
  if low is equal to high and we haven't found targetNum, then return -1 to
  indicate that the value was not found.

  Determine the slice point (the difference between low and hi, divided by 2)

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums where low is the beginning of the array, and
  hi is the middle of the array

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums where low is the middle of the array, and hi
  is the end of the array

  If it's not greater and not less (i.e. 'else'), return the slice point because
  we have found our value!
  */
}


/*******************************************************************
BINARY SEARCH VERSION 5:

Write an Iterative Binary Search that returns the Index value of targetNum if
it is in the nums array, and -1 if it is not found.
*******************************************************************/

const iterBSearchIdx = (nums, targetNum) => {
  // this is identical to Version 2, but return the index or -1 rather than
  // true or false
}

module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx
};
