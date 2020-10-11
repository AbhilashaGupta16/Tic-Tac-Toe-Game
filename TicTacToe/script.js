let n1 = ""
let n2 = ""
function start() {
    n1 = prompt("Player1 enter your name", "PLAYER-1");
    n2 = prompt("Player2 enter your name", "PLAYER-2");

    document.getElementById("Player1").innerHTML = n1;
    document.getElementById("Player2").innerHTML = n2;
    p1 = 0
    if (document.getElementById("score-1") != null) {
        document.getElementById("score-1").innerHTML = (`Score : ${p1.toString()}`);
    }
    p2 = 0
    if (document.getElementById("score-2") != null) {
        document.getElementById("score-2").innerHTML = (`Score : ${p2.toString()}`);
    }
}

function replay() {
    c = 0
    f = 0
    flag = 0
    arr = ["", "", "", "", "", "", "", "", ""]
    for (i = 1; i < 10; i++) {
        var s = i.toString()
        var box_no = "box-" + s
        document.getElementById(box_no).innerHTML = "";
        document.getElementById(box_no).style.backgroundColor = "#292929";
    }
    if (document.getElementById("victory") != null) {
        document.getElementById("victory").innerHTML = null;
    }
}

let c = 0
let f = 0
let flag = 0
p1 = 0
p2 = 0
let arr = ["", "", "", "", "", "", "", "", ""]

function check(r) {
    if (equality(0, 1, 2, r))
        f = 1
    else if (equality(0, 1, 2, r))
        f = 1
    else if (equality(0, 3, 6, r))
        f = 1
    else if (equality(6, 7, 8, r))
        f = 1
    else if (equality(2, 5, 8, r))
        f = 1
    else if (equality(0, 4, 8, r))
        f = 1
    else if (equality(2, 4, 6, r))
        f = 1
    else if (equality(1, 4, 7, r))
        f = 1
    else if (equality(3, 4, 5, r))
        f = 1
    if (f == 1)
        return true
    else
        return false


}
function equality(a, b, c, x) {
    if (arr[a] == arr[b] && arr[b] == arr[c] && arr[c] == x) {
        var a1 = (a + 1).toString(), b1 = (b + 1).toString(), c1 = (c + 1).toString();
        a1 = "box-" + a1;
        b1 = "box-" + b1;
        c1 = "box-" + c1;
        document.getElementById(a1).style.backgroundColor = "#616161";
        document.getElementById(b1).style.backgroundColor = "#616161";
        document.getElementById(c1).style.backgroundColor = "#616161";
        return true;
    }
}


function play(x) {
    var st = x.toString();
    var r = ""
    var box_no = "box-" + st;
    
    if (c % 2 == 0) {
        arr[x - 1] = "X"
        r = "X"
        document.getElementById(box_no).innerHTML = r;
        if (check(r)) {
            flag = 1
            var str = n1 + " won";
            if (document.getElementById("victory") != null) {
                document.getElementById("victory").innerHTML = str;
            }
            p1 = p1 + 1
            if (document.getElementById("score-1") != null) {
                document.getElementById("score-1").innerHTML = (`Score : ${p1.toString()}`);
            }
        }
    }
    else {
        arr[x - 1] = "O"
        r = "O"
        document.getElementById(box_no).innerHTML = r;
        if (check(r)) {
            flag = 1
            var str = n2 + " won";
            if (document.getElementById("victory") != null) {
                document.getElementById("victory").innerHTML = str;
            }
            p2 = p2 + 1
            if (document.getElementById("score-2") != null) {
                document.getElementById("score-2").innerHTML = (`Score : ${p2.toString()}`);
            }
        }
    }
    c = c + 1
    if (c == 9) {
        if (document.getElementById("victory") != null) {
            document.getElementById("victory").innerHTML = "TIE";
        }
    }

}

if (f == 0) {
    if (document.getElementById("victory") != null) {
        document.getElementById("victory").innerHTML = "TIE";
    }
}

