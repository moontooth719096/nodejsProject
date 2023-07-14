const express = require("express");
const app = express();
const port = 4000;

app.get('/',(req,res)=>
  {
    res.json([
      {
        code:1,
        msg:"asda"
      }
    ]);
  }
);

app.listen(port,function(err){
  if(err)
    console.log(`啟用失敗 ${err.msg}`);
  else
    console.log(`已啟用port ${port}`);
});