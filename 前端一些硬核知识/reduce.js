/* 
    对一段引文文章，获取每个单词，
    对 , . ; : ' " ? 进行分割 
*/

function splitArticle(base) {
    return function (content) {
        let arr = content.split(base);
        return arr.reduce((total, item) => total + item, '');
    }
}

const g = function (content) {
    const base = [',', '.', ';', ':', '\'', '"', '?'];
    const chain = base.map( item => splitArticle(item));
    let compose = chain.reduce((a, b) => (str) => {
        return a(b(str));
    });
    return compose(content).split(" ");
}

let content = 'Among humans, smiling is an expression denoting pleasure, sociability, happiness, joy or amusement. It is distinct from a similar but usually involuntary expression of anxiety known as a grimace. Although cross-cultural studies have shown that smiling is a means of communication throughout the world,[1] there are large differences among different cultures, religions and societies, with some using smiles to convey confusion or embarrassment.';

let result = g(content);
console.log('result', result);