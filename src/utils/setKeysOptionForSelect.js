

export const setKeysOptionForSelect = (arrOpt) => arrOpt.map((item) => {
    let object = {}
    object.value = item
    object.label = item.toString()
    return object
})