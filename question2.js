
// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

// */



  /* this is a second Question Answer */

const arr = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
var obj={};
var res={}
function getUniquePrducts() {
    for(let i=0; i<arr.length; i++){
        var x=arr[i];
        var t=arr[i].productName;
        if (t in obj){
          obj[t]+=x.quantity;
        }
        else{
          obj[t]=x.quantity;
        }
      }
      var ans=[]
      
      for(let x in obj){
        for(let i=0; i<arr.length; i++){
          if(x==arr[i].productName){
            arr[i].quantity=obj[x]
            ans.push(arr[i]);
            break;
            
          }
        }
      }
      console.log(ans)

}
getUniquePrducts()