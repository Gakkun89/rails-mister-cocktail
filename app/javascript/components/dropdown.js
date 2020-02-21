const dropdown = () =>{
document.getElementById("dropdown").addEventListener('click', function (event) {
            event.stopPropagation();
        });
};

const dropdown1 = () =>{
document.getElementById("dropdown1").addEventListener('click', function (event) {
            event.stopPropagation();
        });
};


export { dropdown, dropdown1 };
