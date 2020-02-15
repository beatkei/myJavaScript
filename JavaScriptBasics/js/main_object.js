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
}