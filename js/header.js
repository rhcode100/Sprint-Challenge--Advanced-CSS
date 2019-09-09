const headerView = () => {
    

    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(350, 50);
    context.stroke(); 
    console.log('ran')
}

headerView();