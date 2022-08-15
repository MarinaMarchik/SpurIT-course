const content = document.querySelector('.collapsible__content')
const button = document.querySelector('.collapsible__button')
const btnCollapseVisible = document.querySelector('.collapsible__action--visible')
const btnCollapseHidden = document.querySelector('.collapsible__action--hidden')

button.style.cssText = `
    position: relative;
    margin: 15px;
    padding: 8px 12px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: bolt;
    background: linear-gradient(to top left, #DE3163, #97233F);
    border: 1px solid transparent;
    border-radius: 15px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);
    cursor: pointer;`

btnCollapseVisible.style.cssText = `
    position: absolute;
    visibility: hidden;
    left: 20px;`

content.style.cssText = `
    margin: 0 15px;
    width: 300px;
    padding: 5px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    background-color: #ffb4b4;
    opacity: 0;`


button.addEventListener('click', function (e) {
    e.defaultPrevented
    content.classList.toggle('collapse')
    if (content.classList.contains('collapse')) {
        btnCollapseVisible.style.visibility = 'visible'
        btnCollapseHidden.style.visibility = 'hidden'
        content.animate([
            {transform: 'translateY(-15px)', opacity: 0, offset: 0},
            {transform: 'translateY(-10px)', opacity: .5, offset: .5},
            {transform: 'translateY(0px)', opacity: 1, offset: 1}
        ], {
            duration: 600,
            easing: 'ease-in-out',
            delay: 5,
            fill: 'forwards'
        });
    } else {
        btnCollapseVisible.style.visibility = 'hidden'
        btnCollapseHidden.style.visibility = 'visible'
        content.animate([
            {transform: 'translateY(0px)', opacity: 1, offset: 0},
            {transform: 'translateY(-10px)', opacity: .5, offset: .5},
            {transform: 'translateY(-15px)', opacity: 0, offset: 1}
        ], {
            duration: 600,
            easing: 'ease-in-out',
            delay: 5,
            fill: 'forwards'
        });
    }
})






