import bugModel from './../../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:124578,
        name:"Crash on load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "Henry deBuchananne",
        creator: "God",
        priority: 1,
        time: "18:54",
    }))

    data.push(new bugModel({
        _id:124578,
        name:"Cant load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.0",
        assigned: "John Smith",
        creator: "God",
        priority: 3,
        time: "18:54",
    }))

    let sorted = data.sort((a,b) => {return a.priority-b.priority})
    return sorted;
    
}
