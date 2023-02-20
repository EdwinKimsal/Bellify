//Variables
trialNumber = 0;
numbers = [];
tpr = 100000;
trial = 0;
i = 0;


// When 'Start' is pressed.
function  start(){
    diceRolls = document.getElementById('dice').value;
    tpr = document.getElementById('tpr').value;

    document.getElementById('words').innerHTML = 'Trial: ' + trialNumber;

    document.getElementById('start').style.display  = 'none'
    document.getElementById('restart').style.display = 'none';
    document.getElementById('variableArea').style.display = 'none';
    document.getElementById('run').style.display = 'flex';
    document.getElementById('end').style.display = 'flex';
}

// When 'Run' is pressed.
function run(){
    var counter = 1;

    while (counter <= tpr){
        while(i < diceRolls){
            var num = Math.floor((Math.random() * 6) + 1);
            trial += num;

            i++;
        }
        
        numbers.push(trial);
        trial = 0;

        trialNumber++;
        document.getElementById('words').innerHTML = 'Trial: ' + trialNumber;

        i = 0;
        counter++;
    }
}

// When 'End' is pressed.
function end(){
    var trace = {
        x: numbers,
        type: 'histogram',
      };

    var data = [trace];
    var layout = {
        title: 'Data',
        showlegend: false
    };

    Plotly.newPlot('graph', data, layout, {displayModeBar: false, responsive: true});
    
    document.getElementById('restart').style.display = 'flex';
    document.getElementById('start').style.display  = 'none'
    document.getElementById('variableArea').style.display = 'none';
    document.getElementById('run').style.display = 'none';
    document.getElementById('end').style.display = 'none';
}

// When 'Restart' is pressed.
function restart(){
    numbers = [];

    trialNumber = 0;
    document.getElementById('words').innerHTML = "Enter your trials per run and the amount of dice you want. <br> (Works best with a high Trials Per Run)";

    Plotly.deleteTraces(graph, 0)
    document.getElementById('graph').innerHTML = '';

    document.getElementById('restart').style.display = 'none';
    document.getElementById('run').style.display = 'none';
    document.getElementById('end').style.display = 'none';
    document.getElementById('start').style.display = 'flex'
    document.getElementById('variableArea').style.display = 'flex';
}