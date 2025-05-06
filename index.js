import { sleep } from "./helpers/util.js";
import { SortingAlgorithms } from "./helpers/sortingAlgorithms.js";

let nBars = 10;

let numbersbars = document.getElementById('numbersBars');


const stage = document.getElementById('stage');
stage.style.width = `${nBars * 30}px`;
const selectAlgorithm = document.getElementById('SelectAlgorithm');

const generateBtn = document.getElementById('generateBtn');
const solveBtn = document.getElementById('solveBtn');


let bars=[];
let barsDivs = [];

const sortingAlgorithms = new SortingAlgorithms({})

const start = () => {
    stage.innerHTML='';

    bars = Array(nBars).fill(0).map(_=>{
        return {
            width: 20,
            height: Math.floor(Math.random() * 200) + 1
        }
    });

    barsDivs = [];

    for (let i = 0; i < bars.length; i++) {
        const bar = document.createElement('div');
        bar.style.width = `${bars[i].width}px`;
        bar.style.height = `${bars[i].height}px`;
        bar.style.left = `${5+i*30}px`;
        bars[i] = { ...bars[i], position: i};
        bar.classList.add('bar');
        barsDivs.push(bar);
        stage.appendChild(bar);
        
    }
}

start()

async function swapBars(barDivs, i, j) {
    barDivs[i].style.left = `${5 + j * 30}px`;
    barDivs[i].classList.add('activate');
    barDivs[j].style.left = `${5 + i * 30}px`;
    barDivs[j].classList.add('activate');
    await sleep(300);
    barDivs[i].classList.remove('activate');
    barDivs[j].classList.remove('activate');
    let temp = barsDivs[i];
    barDivs[i] = barDivs[j];
    barDivs[j] = temp;

    let tempData = bars[i];
    bars[i] = bars[j];
    bars[j] = tempData;

}

const algorithms = [
    sortingAlgorithms.bubbleSort
]

const solve = async () =>{
    const array = structuredClone(bars.map(el => el.height))

    const swaps = algorithms[selectAlgorithm.selectedIndex](array)
 
    for (let i = 0; i < swaps.length; i++) {
        if(swaps[i].firstPosition !== swaps[i].lastPosition){
            await swapBars(barsDivs,swaps[i].firstPosition,swaps[i].lastPosition);
        }
        
    }
}

generateBtn.addEventListener('click', () => {
    //nBars = parseInt(numbersbars.ariaValueMax,10)
    nBars = parseInt(numbersbars.value,10)
    stage.style.width = `${nBars * 30}px`
    start();
})

solveBtn.addEventListener('click', () => {
    solve()
})


