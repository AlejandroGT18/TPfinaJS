function selecCard(laCard) {
    document.getElementById('opcionesSel').value = laCard
    
    this.losTickets();
}    

// function totalApagar(desc,cantidad) {
//     if (cantidad == 0) {
//         let cantidadDeTickets = document.getElementById('cant').value

//         let precio = cantidadDeTickets * 200

//         let descuentoAplicado = desc * precio / 100
//         precio = precio - descuentoAplicado

//         if (desc == 80) {
//             document.getElementById('descSelec').innerHTML = "Estudiante"
//             document.getElementById('descSelec').className = "text-primary"
//         } else {
//             if (desc == 50) {
//                 document.getElementById('descSelec').innerHTML = "Trainee"
//                 document.getElementById('descSelec').className = "text-success"
//             } else {
//                 if (desc == 15) {
//                     document.getElementById('descSelec').innerHTML = "Junior"
//                     document.getElementById('descSelec').className = "text-danger"  
//                 } 
//             }
//         }

//         document.getElementById('totalApagar').innerHTML = precio
//     } else {
//         let precio = cantidad * 200

//         let descuentoAplicado = desc * precio / 100
//         precio = precio - descuentoAplicado

//         if (desc == 80) {
//             document.getElementById('descSelec').innerHTML = "Estudiante"
//             document.getElementById('descSelec').className = "text-primary"
//         } else {
//             if (desc == 50) {
//                 document.getElementById('descSelec').innerHTML = "Trainee"
//                 document.getElementById('descSelec').className = "text-success"
//             } else {
//                 if (desc == 15) {
//                     document.getElementById('descSelec').innerHTML = "Junior"
//                     document.getElementById('descSelec').className = "text-danger"  
//                 } 
//             }
//         }

//         document.getElementById('totalApagar').innerHTML = precio
//     }
    

    
// }

function losTickets() {
    let cantidadTicket = document.getElementById('cant').value
    let precio = 200 * cantidadTicket
    let descuentos = document.getElementById('opcionesSel').value
    precio = precio - (descuentos * precio / 100)

    document.getElementById('totalApagar').innerHTML = precio
}