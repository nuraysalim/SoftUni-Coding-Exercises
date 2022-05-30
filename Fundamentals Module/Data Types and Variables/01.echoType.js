function echo(param) {
    const type = typeof param;
    console.log(type);

    if (type == 'string' || type == 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echo(14)