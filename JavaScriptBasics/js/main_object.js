'use script'

{
    // 配列
    const scores = [80,90,70];
    console.log(scores[1]);
    console.log(scores.length);
    scores.push(99,50);
    console.log(scores);
    console.log(scores.length);

    // スプレッド構文（配列の結合）
    const otherScores1 = [30,100];
    const otherScores2 = [30,100, ...otherScores1];
    console.log(otherScores2);

    // forEach 第一引数はカレントの値で、第二引数はindex、第三引数は配列自身 に自動的になり自由な名前を付けられる
    const scores2 = [80, 90, 40, 70];
    scores2.forEach((score, index) => {
        console.log(`Score: ${index}:${score}`)
    })

    // map
    const updateScores = scores2.map(score => score + 20 );
    console.log(updateScores);

    // filter
    const numbers = [1, 4, 7, 8, 10];

    const evenNumbers = numbers.filter((number) => {
        if ( number %2 === 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(evenNumbers);

    // オブジェクト(構成要素のことをプロパティorメンバーと呼ぶ)
    const point = {x: 100, y: 180};
    console.log(point);

    point.z = 200;
    delete point.y;
    console.log(point);

    // 例外処理
    //const name = 'beat';
    const name = 5;

    try {
        console.log(name.toUpperCase());
    } catch (e) {
        console.log(e);
    }
    console.log('Finish!');

    // クラス
    class Post {
        constructor(text) {
            this.text= text;
            this.linkcount= 0;
        }

        show() {
            console.log(`${this.text} - ${this.linkcount}いいね`)
        }

        like() {
            this.linkcount++;
            this.show();
        }

        // 静的メソッド （thisはつかえないよ）
        static showInfo() {
            console.log('Post Class Versiton 1.0')
        }
    }

    const posts = [
        new Post('JaaScript勉強中'),
        new Post('プログラミング楽しい'),
    ]

    posts[0].show();
    posts[1].show();
    posts[0].like();

    Post.showInfo();
}