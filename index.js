function findMatching(arrayOfDrivers, string){
    let newDrivers = arrayOfDrivers.filter(function (driver){
        return driver.toUpperCase() === string.toUpperCase()
        console.log("driver", driver);
    });
    console.log("newDrivers", newDrivers);
    return newDrivers;
}

function fuzzyMatch(arrayOfDrivers, string){
    return arrayOfDrivers.filter(function (driver){
        return driver.toLowerCase().substring(0, string.length) === string.toLowerCase()
    })
    // let newDrivers = arrayOfDrivers.filter(function (driver){
    //     return driver.toLowerCase().startsWith(0, string.length) === string.toLowerCase()
    //     console.log("driver", driver);
    // });
    // return newDrivers;
}

function matchName(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(function (driver) {
       return driver.name === string
    });
}

