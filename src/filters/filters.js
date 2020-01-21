import Vue from "vue";

 Vue.filter("itemEnding", num => {
  switch (String(num)[String(num).length-1]) {
    case '0':
    case '9':
    case '8':
    case '7':
    case '6':
    case '5':
       return "продуктов";
    case '4':
    case '2':
    case '3':
      return num / 10 > 2 || num < 10  ? "продукта" :  "продуктов";
    case '1':
     return  num === 11  ?  "продуктов" : "продукт";
    default:
        console.log(typeof num)
      return "LOh"

  }
});
