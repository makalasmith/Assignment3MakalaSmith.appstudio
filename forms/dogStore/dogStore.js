
let productName = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let productPrice = [10, 14, 20, 30, 32, 27, 12, 27]
let wishList = []
let item = []


btnShowInventory.onclick=function(){
  for (i=0; i<=productName.length-1; i++){
    item.push(`${productName[i]} : ${productPrice[i]}`)}
    lblInventory.value = `${item}`
}

btnAddToWishList.onclick=function(){
  wantedItem = inptItemSearch.value
  wishList.push(wantedItem)
  lblWishList.value = `${wishList}`
}
