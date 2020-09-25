module.exports= (done)=>{
  const date=new Date();
  const todaysDate=date.getDate().toString()+'/'+date.getMonth().toString()+'/'+date.getFullYear().toString();

  done(todaysDate);

}