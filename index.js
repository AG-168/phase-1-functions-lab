
function distanceFromHqInBlocks(location){
    return Math.abs(location-42)
}

function distanceFromHqInFeet(location){
    return Math.abs(location-42)*264
}

function distanceTravelledInFeet(start,end){
    return Math.abs(start-end)*264
}

function calculatesFarePrice(start,destination) {
    const distanceFt = Math.abs(start-destination)*264
    if (distanceFt<400) {return 0}
    else if (distanceFt>=400 && distanceFt<=2000) {return (distanceFt-400)*0.02}
    else if (distanceFt>2000 && distanceFt<2500) {return 25}
    else if (distanceFt>2500) {return 'cannot travel that far'}
}
