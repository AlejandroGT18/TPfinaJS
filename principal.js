function selecCard(laCard) {
    document.getElementById('opcionesSel').value = laCard
    
    this.losTickets();
}    


function losTickets() {
    let cantidadTicket = document.getElementById('cant').value
    let precio = 200 * cantidadTicket
    let descuentos = document.getElementById('opcionesSel').value
    precio = precio - (descuentos * precio / 100)

    document.getElementById('totalApagar').innerHTML = precio
}

function borrarTodo() {
    document.getElementById('totalApagar').innerHTML = 0
}