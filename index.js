const selectFormation = document.getElementById('select-formation')


selectFormation.addEventListener("change", () => {
    let defenceLine = document.querySelector('#defence-line');
    let midfieldLine = document.querySelector('#midfield-line');
    let attackLine = document.querySelector('#attack-line');
    defenceLine.innerHTML = ``
    midfieldLine.innerHTML = ``
    attackLine.innerHTML = ``
    let shirtIcon = `
    <div>
        <img src="shirt.png" height="80" width="80" alt="">
    </div>
`;

    let formation = selectFormation.value
    let a = formation[0]
    let b = formation[1]
    let c = formation[2]

    for (let i = 0; i < Number(a); i++) {
        defenceLine.innerHTML += shirtIcon
    }

    for (let i = 0; i < Number(b); i++) {
        midfieldLine.innerHTML += shirtIcon
    }
    
    for (let i = 0; i < Number(c); i++) {
        attackLine.innerHTML += shirtIcon
    }




});