let disc;
//console.log("Enter Amount",prompt(amt));
var amt = 4000;
console.log("Sale Amount",amt);
  if(amt <= 5000)
  {
    disc=(amt*0.02);
    amt=amt-disc;
    console.log("Discount",disc);
    console.log("Amount After discount",amt);
  }
  else if(amt<=10000)
  {
   disc=(amt*0.05);
   amt=amt-disc;
   console.log("Discount",disc);
   console.log("Amount After discount",amt);
  }
  else if(amt <=20000)
  {
   disc=(amt*0.07);
   amt=amt-disc;
   console.log("Discount",disc);
   console.log("Amount After discount",amt);
  }
  else if(amt <=50000)
  {
    disc=(amt*0.1);
    amt=amt-disc;
    console.log("Discount",disc);
    console.log("Amount After discount",amt);
  }
  else
  {
    console.log("No Amount");
  }
