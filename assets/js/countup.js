let from = new Date("Sep 6, 2015 19:00:00")

function printStartedSince() {
    // bruh
    var m1 = moment(from)
    var m2 = moment()
    var md = moment.duration(m2.diff(m1))
    var m  = {
      yy: md.years(),
      mm: md.months(),
      dd: md.days(),
      HH: md.hours(),
      MM: md.minutes(),
      SS: md.seconds()
    }

    document.getElementById("result").innerHTML = `${m.yy} năm ${m.mm} tháng ${m.dd} ngày ${m.HH} giờ ${m.MM} phút và ${m.SS} giây`
}

// Update every 1s
setInterval(function() {
    printStartedSince()
}, 1000)
