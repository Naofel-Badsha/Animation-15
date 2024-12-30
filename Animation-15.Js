

const bgAinmation = document.getElementById('bgAinmation');
const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAinmation.append(colorBox)

}