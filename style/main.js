import Data from '../data.json';

const img = Data[0].logo;

const app = document.getElementById('app');

app.innerHTML = img;
