package com.hexa.hotbyte.services;

import java.util.List;

import com.hexa.hotbyte.dto.OrderDTO;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.model.Order;

public interface OrderService {

	OrderDTO createOrder(OrderDTO order);

	List<Order> getOrder(Long userId);

	List<Order> getOrderHotel(Long hotelId) throws ResourceNotFoundException;

	Order updateOrderStatus(int statusId,int orderId);

}
