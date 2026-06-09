document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');

    let coordinates = {
        y: undefined,
        x: undefined
    };

    let addElement = () => {
        let newEle = document.createElement('div');
        newEle.classList.add('line');

        newEle.style.left = coordinates.x + 'px';
        newEle.style.top = coordinates.y + 'px';

        header.appendChild(newEle);
    }

    let updateCoordinates = e => {
        if(coordinates.x === undefined | coordinates.y === undefined) {
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }

        if(Math.abs(coordinates.x - e.x) > 50 || Math.abs(coordinates.y - e.y) > 50) {
            coordinates.x = e.x;
            coordinates.y = e.y;
            addElement();
        }
    }

    header.addEventListener('mousemove', e => {
        updateCoordinates(e);
    })
})