# stack 栈

后进先出

## 案例

### 括号匹配问题

给一段字符串括号，查看是否匹配

```javascript

function check(str) {

  let stack = [];
  let ok = true;
  let left_brackets = ["(", "[", "{"];
  let all_brackets = ["()", "[]", "{}"];

  str.split('').forEach((bracket) => {
    if (left_brackets.includes(bracket)) {
      stack.push(bracket)
      return
    }

    let concat_bracket = stack[stack.length - 1] + bracket

    if (all_brackets.includes(concat_bracket)) {
      stack.pop()
    } else {
      ok = false
    }
  })

  if (stack.length !== 0) {
     ok = false
  }

  return ok

}

```