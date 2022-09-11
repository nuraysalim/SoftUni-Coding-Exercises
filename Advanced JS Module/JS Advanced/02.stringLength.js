function strLength(str1, str2, str3) {
    const sumOfLengths = str1.length + str2.length + str3.length;
    const avgLength = Math.round(sumOfLengths / 3);

    console.log(sumOfLengths);
    console.log(avgLength);
}
strLength('chocolate', 'ice cream', 'cake')