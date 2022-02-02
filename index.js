function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return (street - 42);
    }
    else if (street < 42) {
        return (42 - street);
    }
}

function distanceFromHqInFeet(street) {
    if (street > 42) {
        return (street - 42) * 264;
    }
    else if (street < 42) {
        return (42 - street) * 264;
    }
}

function distanceTravelledInFeet (start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else if (start < destination) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice (start, destination) {
    let n = distanceTravelledInFeet (start, destination)
    if (n < 400) {
        return 0;
    }
    else if (n > 2500) {
        return "cannot travel that far";
    }
    else if (n > 2000) {
        return 25;
    }
    else if (n >= 400) {
        return ((n - 400) * .02);
    }
}  