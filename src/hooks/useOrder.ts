import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const [tipSeleccionado, setTipSeleccionado] = useState(0);
  const addItem = (item: MenuItem) => {
    const oldItem = order.find((orderItem) => orderItem.id == item.id);
    if (oldItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const orderItem: OrderItem = { ...item, quantity: 1 };
      setOrder((prevOrder) => [...prevOrder, orderItem]);
    }
  };
  const onChangeTip = (tip: number) => {
    console.log(tip);
    setTip(tip);
  };
  const removeItem = (item: OrderItem) => {
    const oldItem = order.find((orderItem) => orderItem.id === item.id);
    if (oldItem) {
      const updatedOrder = order.filter(
        (orderItem) => orderItem.id !== oldItem.id
      );
      setOrder(updatedOrder);
    }
  };
  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };
  return {
    order,
    tip,
    addItem,
    removeItem,
    onChangeTip,
    placeOrder,
  };
};
