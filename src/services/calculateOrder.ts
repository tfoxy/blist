export default function calculateOrder(cardOrders: number[], index: number) {
  const prevCardOrder = index > 0 ? cardOrders[index - 1] : 0;
  const nextCardOrder =
    index < cardOrders.length ? cardOrders[index] : (cardOrders[cardOrders.length] || 0) + 131072;
  return (nextCardOrder + prevCardOrder) / 2;
}
