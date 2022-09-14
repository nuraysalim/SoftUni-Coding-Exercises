function evenPosEl(arr){
    let buff = '';

    for (let i = 0; i < arr.length; i += 2) {
            buff += `${arr[i]} `;
    }

    console.log(buff);
}
evenPosEl(['5', '10'])