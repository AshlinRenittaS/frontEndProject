// script.js
function toggleBox(box) {
    const content1 = box.querySelector('.content1');
    const isVisible = content1 && content1.style.display === 'block';

    // Close all open boxes
    document.querySelectorAll('.box .content1').forEach(item => {
        item.style.display = 'none';
    });

    // Show the clicked box's content
    if (content1 && !isVisible) {
        content1.style.display = 'block';
    }
}

//box2

function toggleBox(box) {
    const content2 = box.querySelector('.content2');
    const isVisible = content2 && content2.style.display === 'block';

    // Close all open boxes
    document.querySelectorAll('.box .content2').forEach(item => {
        item.style.display = 'none';
    });

    // Show the clicked box's content
    if (content2 && !isVisible) {
        content2.style.display = 'block';
    }
}

//box3

function toggleBox(box) {
    const content3 = box.querySelector('.content3');
    const isVisible = content3 && content3.style.display === 'block';

    // Close all open boxes
    document.querySelectorAll('.box .content3').forEach(item => {
        item.style.display = 'none';
    });

    // Show the clicked box's content
    if (content3 && !isVisible) {
        content3.style.display = 'block';
    }
}
