/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const len = nums.length;
    if (len<2) return 0;
    
    // 计算桶的大小 bucketSize = ceil(max - min)/len-1
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    if (len === 2) {
        return max-min;
    }
    if (max === min) return max-min;
    let bucketSize = Math.floor((max-min) / (len-1));
    if(bucketSize === 0) {
        bucketSize = 1;
    }
    // 计算桶的个数 buketCount = floor(max - min)/bucketSize
    const bucketCount = Math.floor((max-min) / bucketSize) + 1;
    // 遍历 nums ， 分配nums[i]到每个桶
    const bucket = new Array(bucketCount).fill({}).map((item) => ({
        ...item,
        max: NaN,
        min: NaN,
    }));
    bucket[0].min = min;
    bucket[0].max = min;
    bucket[bucketCount-1].min = max;
    bucket[bucketCount-1].max = max;

    let counter = 0;
    let res = 0;
    for (let i = 0; i < len; i++) {
        // 寻找第几个桶 0 开始
        counter = Math.floor((nums[i]- min)/bucketSize);

        if(isNaN(bucket[counter].max) || bucket[counter].max < nums[i]){
            bucket[counter].max = nums[i];
        }
        if (isNaN(bucket[counter].min) || bucket[counter].max > nums[i]) {
            bucket[counter].min = nums[i];
        }
    }
    // 遍历每个桶，寻找相邻桶的最小值最大值差值最大值

    for (let i = 0; i < bucketCount-1; ) {
        // 非空的相邻
        let j = i+1;
        while(isNaN(bucket[j].max)) j++;
        if(bucket[j].min - bucket[i].max > res){
            res = bucket[j].min - bucket[i].max;
        }
        i = j;
    }
    return res;
};
// const res = maximumGap([12115, 10639, 2351, 29639, 31300, 11245, 16323, 24899, 8043, 4076, 17583, 15872, 19443, 12887, 5286, 6836, 31052, 25648, 17584, 24599, 13787, 24727, 12414, 5098, 26096, 23020, 25338, 28472, 4345, 25144, 27939, 10716, 3830, 13001, 7960, 8003, 10797, 5917, 22386, 12403, 2335, 32514, 23767, 1868, 29882, 31738, 30157, 7950, 20176, 11748, 13003, 13852, 19656, 25305, 7830, 3328, 19092, 28245, 18635, 5806, 18915, 31639, 24247, 32269, 29079, 24394, 18031, 9395, 8569, 11364, 28701, 32496, 28203, 4175, 20889, 28943, 6495, 14919, 16441, 4568, 23111, 20995, 7401, 30298, 2636, 16791, 1662, 27367, 2563, 22169, 1607, 15711, 29277, 32386, 27365, 31922, 26142, 8792]);
// console.log('res', res);
// @lc code=end

