var posts=["2026/07/08/Mirage-Tank/","2026/07/10/STEGA-直接附加/","2026/07/11/STEGA-LSB/","2026/07/07/芝士甚么-WIFI密码/","2026/04/10/hello-world/","2026/07/23/zip伪加密/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };