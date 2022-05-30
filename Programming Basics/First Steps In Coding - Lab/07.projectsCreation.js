function projectsCreation(input){
    let architechtsName = input[0];
    let numberOfProjects = Number(input[1]);
    const hoursNeededForAProject = numberOfProjects * 3;

    console.log(`The architect ${architechtsName} will need ${hoursNeededForAProject} hours to complete ${numberOfProjects} project/s.`)

}
projectsCreation(["George", "4"])