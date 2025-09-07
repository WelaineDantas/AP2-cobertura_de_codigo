/**
* Esse trabalho é do grupo G1
* Alunos:
1. Darlan Almeida Barroso/ 2023011303
2. Paulo Gonçalo Farias Gonçalves/ 2023011798
3. Francisco Jeferson da Silva Dantas/ 2023011706
4. Maria Welaine Dantas Angelo/ 2023011789
*/

const { Order, Item } = require("../src/order");

describe("Testes iniciais - placeholder", () => {
  test("teste mínimo para validar setup", () => {
    expect(true).toBe(true);
  });

  test("deve criar um item corretamente", () => {
    const item = new Item(1, "Camiseta", 50);
    expect(item.id).toBe(1);
    expect(item.name).toBe("Camiseta");
    expect(item.price).toBe(50);
  });  

  test("deve calcular o total corretamente na criação", () => {
    const items = [new Item(1, "A", 10), new Item(2, "B", 20)];
    const order = new Order(1, items);
    expect(order.total).toBe(30);
  });

  test("deve adicionar item e atualizar o total", () => {
    const order = new Order(1, []);
    order.addItem(new Item(1, "A", 15));
    expect(order.total).toBe(15);
  });

  test("deve completar pedido após pagamento", () => {
    const order = new Order(1, []);
    order.pay();
    order.complete();
    expect(order.status).toBe("completed");
  });

  test("não deve completar pedido não pago", () => {
    const order = new Order(1, []);
    expect(() => order.complete()).toThrow("Order must be paid before it can be completed");
  });

  test("deve cancelar pedido antes de completar", () => {
    const order = new Order(1, []);
    order.cancel();
    expect(order.status).toBe("cancelled");
  });
  });
