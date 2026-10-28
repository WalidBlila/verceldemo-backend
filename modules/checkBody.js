function checkBody (body, keys) {
    let isValid = true; 

    for (const key of keys){
        if (!body[key]) {
            isValid = false
        }
    }
    return isValid
}

module.exports = { checkBody };