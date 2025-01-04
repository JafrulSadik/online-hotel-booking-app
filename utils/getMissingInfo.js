export const getMissingInfo = (hotelInfo) => {
    const missingInfo = [];
    for (const key in hotelInfo) {
        if(!hotelInfo[key] && key !== "description") {
            missingInfo.push(key);
        }
    }

    return missingInfo.join(", ")
}