// Code your solution here
function findMatching(names, str){
    return names.filter(function(name){
        return (name.toUpperCase() === str.toUpperCase());
    });
}

function fuzzyMatch(names, str){
    return names.filter(function(name){
        return (name[0] === str[0]);
    });
}

function matchName(drivers, str){
    return drivers.filter(function(driver){
        return (driver.name === str);
    })
}
