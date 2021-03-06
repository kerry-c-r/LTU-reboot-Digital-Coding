const listItems = document.querySelectorAll ('button.selection');

const allimages = document.querySelectorAll ('.main .image-selections .images');

function toggleActiveClass (active) {

    listItems.forEach ( function (item)
    {
        item.classList.remove ('active');
    })
    active.classList.add('active');
}



//listItems.forEach( function (item) {
   // item.addEventListener('click', function () {
   //     toggleActiveClass (item );
    //    console.log('You clicked me!');
   // })


function toggleimages (dataClass) {
    if (dataClass === 'all') {
        allimages.forEach ( function (image) {
            image.style.display = 'block';
        })

    } else {
        allimages.forEach (image => 
            { image.dataset.class === dataClass ?
                 image.style.display ='block' :
                image.style.display = 'none';
            })

        }
    }

listItems.forEach( function (item) {

    item.addEventListener ('click', function () {
        toggleActiveClass( item);
        toggleimages(item.dataset.class);
    })

    })