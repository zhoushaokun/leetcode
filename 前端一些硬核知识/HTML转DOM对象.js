
function DomObj(tag) {
    this.tag = tag;
    this.children = null;
}

function html2Obj(htmlStr) {
    const stack =[];
    // stack.push(new DomObj('html'));
    const root = {
        children:[],
    };
    stack.push(root);
    for (let i = 0; i < htmlStr.length; i ++) {        
        let childNodeInfo = findNode(i, htmlStr);
        i = childNodeInfo.index;
        if(childNodeInfo.closeTag) {
            stack.pop();
        } else {
            let node = stack[stack.length - 1];
            if(node.children === null) node.children = [];
            let newNode = new DomObj(childNodeInfo.tag);
            node.children.push(newNode);
            stack.push(newNode);
        }
    }
    return root;
}

/* 
    找到<>节点，然后返回末尾 index 和 tag，
    如果是</>，返回 末尾 index，没有tag
*/
function findNode(i, str) {
    while(str[i] !== '<') i ++;
    let closeTag = false;
    if(str[i + 1] === '/') {
        closeTag = true;
        i ++;
    }
    let tagEnd = i + 1;
    let j = i + 1;
    while(j < str.length) {
        if(str[j] === ' ') {
            tagEnd = j;
        }
        if(str[j] === '>') { // 有空格就以空格为准
            if(tagEnd === i + 1) tagEnd = j;
            break;
        }
        j ++;
    }
    return {
        closeTag,
        tag: str.slice(i + 1, tagEnd),
        index: j,
    };

}

html2Obj(`<html><body><div></div></body></html>`)