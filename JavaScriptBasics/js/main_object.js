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
}