# formatParams.js
序列化一个key/value对

## 实例
<code>
  <pre>
    var myObject = {
      a: {
        one: 1, 
        two: 2, 
        three: [1, 2]
      }, 
      b: [1, 2, 3]
    };

    var str = formatParams(myObject);
  </pre>  
</code>
结果：
<code>
  <pre>
    {
      a[one]: 1,
      a[two]: 2,
      a[three][0]: 1,
      a[three][1]: 2
      b[0]: 1,
      b[1]: 2,
      b[2]: 3
    }
  </pre>
</code>
最后将结果自由拼接即可