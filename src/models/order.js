const orders = []; // Simuler une base de données en mémoire

export class Order {
  constructor(memberId, items) {
    this.id = orders.length + 1;
    this.memberId = memberId;
    this.items = items;
  }

  isValid() {
    return Boolean(this.memberId && Array.isArray(this.items) && this.items.length > 0);
  }

  save() {
    orders.push(this);
  }

  static findById(id) {
    return orders.find((order) => order.id === parseInt(id));
  }
}

export function calculateTotal(order) {
  return order.items.reduce((total, item) => total + item.price, 0);
}
