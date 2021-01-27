# quaua

## 案例

约瑟夫环：从 k 位置的人开始数，数到 m 位置的人出列，依次全部出列

```javascript
function countOff(N, M) {

  if (N < 1 || M < 1) {
    return;
  }

  const source = Array(...Array(N)).map((_, i) => i + 1);

  let index = 0;

  while (source.length) {

    index = (index + M - 1) % source.length;

    console.log(source[index]);

    source.splice(index, 1);
  }

}
```