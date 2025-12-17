const nextGreater = (nums1, nums2) => {
  let stack = [];
  let nge = {};

  stack.push(nums2[nums2.length - 1]);
  nge[nums2[nums2.length - 1]] = -1;

  for (let i = nums2.length - 2; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }

    nge[nums2[i]] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums2[i]);
  }
  return nums1.map((x) => nge[x]);
};

console.log(nextGreater([4, 1, 2], [1, 3, 4, 2]));
