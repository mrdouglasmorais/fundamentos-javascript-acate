const item = {
  type: 'Phone',
  name: 'IPhone',
  price: 8000,
  discount: 5,
  valuePrice: function(){
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.price);
  }
};

console.log(item.valuePrice());

console.log(typeof item);

const colors = ['Blue', 'Green', 'Yellow'];

console.log(colors[0]);