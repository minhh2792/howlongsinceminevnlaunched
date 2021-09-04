let from = new Date("Sep 6, 2015 19:00:00")
function printStartedSince() {
    let z  = new Date()
    let x  = Math.floor(z.getTime() / 1000 - from.getTime() / 1000) // get difference in seconds
    let vy = Math.floor( x / 31556926 )                             // get years
    let vm = Math.floor( x % 31556926 / 2629743 )                   // get months
    let vd = Math.floor( x % 31556926 % 2629743 / 86400 )           // get days
    let vh = Math.floor( x % 31556926 % 2629743 % 86400 / 3600 )    // get hours
    let vM = z.getMinutes()                                         // get minutes
    let vs = z.getSeconds()                                         // get seconds

    document.getElementById("result").innerHTML = `${vy} năm ${vm} tháng ${vd} ngày ${vh} giờ ${vM} phút và ${vs} giây`
}

// Update every 1s
setInterval(function() {
    printStartedSince()
}, 1000)
