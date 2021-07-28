function urlChecker(inputText) {
    var reg = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return reg.test(inputText);
}

export { urlChecker }