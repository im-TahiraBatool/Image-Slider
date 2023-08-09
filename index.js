document.addEventListener("DOMContentLoaded", function() {
    const pictures = [
        "img-1",
        "img-2",
        "img-3",
        "img-4",
        "img-5",
        "img-6",
        "img-7"
    ];
    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".image-container")

    let counter = 0
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                imgDiv.style.background = `url("./images/${pictures[counter]}.jpeg")`;
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                    counter = 0
                }
                imgDiv.style.background = `url("./images/${pictures[counter]}.jpeg")`;
            }
        })
    })
});