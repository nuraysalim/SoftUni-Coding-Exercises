function chessBoard(n) {
  console.log('<div class="chessboard">');

    let whiteOrBlack = 0;
    let blackStart = true;

    for (let i = 0; i < n; i++) {
             console.log('<div>');
             if (blackStart) {
        for (let j = n; j > 0; j--) {
            if (whiteOrBlack % 2 === 0) {
                console.log('<span class="black"></span>');
            } else {
                console.log('<span class="white"></span>')
            }
            whiteOrBlack++;
            blackStart = false;
        } 
            console.log('</div>');
            whiteOrBlack = 0;
            } else {
            for (let k = n; k > 0; k--) {
            if (whiteOrBlack % 2 === 0) {
                console.log('<span class="white"></span>');
            } else {
                console.log('<span class="black"></span>')
            }
            whiteOrBlack++;
            blackStart = true;
        } 
            console.log('</div>');
            whiteOrBlack = 0;
        }
        }
        whiteOrBlack = 0;
        console.log('</div>');
    }


chessBoard(3);
