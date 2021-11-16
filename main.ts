let cmd = ""
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    let _1 = ""
    let _0 = ""
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == _0) {
        basic.showNumber(0)
    } else if (cmd == _1) {
        basic.showNumber(1)
    }
})
basic.forever(function () {
    serial.writeString("!1:TEMP:" + input.temperature())
    basic.pause(30000)
})
