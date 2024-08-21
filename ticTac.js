const Boxes = document.querySelectorAll('.Box');
const resetButton = document.getElementById('resetButton');
const Dispaly = document.getElementById('Msg')
let trunO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



Boxes.forEach( (e) => {
    e.addEventListener('click', () => {
        if (trunO) {
            e.innerHTML = 'o';
            trunO = false;
        }else{
            e.innerHTML = 'x';
            trunO = true;
        }
        e.disabled = true;

        checkWinner(); 
    });
});

function checkWinner() {
    for (let Patterns of winPattern) {
        let pos1Val = Boxes[Patterns[0]].innerText;
        let pos2Val = Boxes[Patterns[1]].innerText;
        let pos3Val = Boxes[Patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disabledBoxes();
                Dispaly.innerText = `WINNER IS ${pos1Val}`
                Reset();
            }
        }
    }
};

function disabledBoxes()  {
    for (let Box of Boxes) {
        Box.disabled = true;
    }
}

function Reset() {
    trunO = true;
}

