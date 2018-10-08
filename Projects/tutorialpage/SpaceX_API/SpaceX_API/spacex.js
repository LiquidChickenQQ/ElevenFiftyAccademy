const rocketURL = 'https://api.spacexdata.com/v2/rockets';
const latestURL = 'https://api.spacexdata.com/v3/launches/latest';
const capsulesURL = 'https://api.spacexdata.com/v3/capsules';
const coresURL = 'https://api.spacexdata.com/v3/cores';
const dragonsURL = 'https://api.spacexdata.com/v3/dragons';
const payloadsURL = 'https://api.spacexdata.com/v3/payloads';

const searchForm = document.getElementById('rocketForm');
const rocketInfo = document.getElementById('rocketList');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();

    fetch(rocketURL)

    .then(response => {
            return response.json();
        })
        .then(json => {
            displayRockets(json);

        })
        .catch(err => {
            console.log(err);
        })
};

function displayRockets(json) {

    while (rocketInfo.firstChild) { /// deletes form info when refreashing
        rocketInfo.removeChild(rocketInfo.firstChild);
    };


    let rockets = json.forEach(r => {
        let rocket = document.createElement('li'); // rocket name
        rocket.innerText = r.name;
        rocketInfo.appendChild(rocket);

        let cost = document.createElement('ul'); //cost per launch
        cost.innerText = ' Cost Per Launch: $' +
            r.cost_per_launch;

        rocketInfo.appendChild(cost);
        let mass = document.createElement('ul'); // mass
        mass.innerText = ' Mass: ' + r.mass.kg + ' kg, ' + r.mass.lb + ' lb';
        rocketInfo.appendChild(mass);

        let firstthrust = document.createElement('ul'); // first stage thrust
        firstthrust.innerText = 'First Stage Thrust: ' + r.first_stage.thrust_sea_level.kN + ' kN, ' + r.first_stage.thrust_sea_level.lbf + ' lb';
        rocketInfo.appendChild(firstthrust);

        let secondthrust = document.createElement('ul'); // second stage thrust
        secondthrust.innerText = 'Second Stage Thrust: ' + r.second_stage.thrust.kN + ' kN, ' + r.second_stage.thrust.lbf + ' lb';
        rocketInfo.appendChild(secondthrust);

    })
}