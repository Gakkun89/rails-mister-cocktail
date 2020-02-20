const dropdown = () =>{
document.getElementById("dropdown").addEventListener('click', function (event) {
            event.stopPropagation();
        });
};

export { dropdown };
