const showNav = () => {
    let ele = document.getElementById("myLinks")
    ele.style.display = ele.style.display === 'block' ? 'none' : 'block';
}

const openNav = () => {
    let ele = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    ele.style.width = ele.style.width === '250px' ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === '250px' ? '0' : '250px';
}