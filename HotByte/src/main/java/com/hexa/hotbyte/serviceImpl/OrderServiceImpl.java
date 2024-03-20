package com.hexa.hotbyte.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.OrderDTO;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.model.Hotel;
import com.hexa.hotbyte.model.Order;
import com.hexa.hotbyte.model.User;
import com.hexa.hotbyte.repository.HotelRepository;
import com.hexa.hotbyte.repository.OrderRepository;
import com.hexa.hotbyte.repository.UserRepository;
import com.hexa.hotbyte.services.OrderService;
@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	OrderRepository orderRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	HotelRepository hotelRepository;
	@Autowired
	ModelMapper modelMapper;
	@Override
	public OrderDTO createOrder(OrderDTO o1) {
		Order order=modelMapper.map(o1, Order.class);
		Long userID=order.getUserID().getUserId();
		User user=userRepository.findById(userID).get();
		Hotel h1=hotelRepository.findById(order.getHotelID().getHotelId()).get();
		order.setUserID(user);
		order.setHotelID(h1);
		order.setAmount((float) user.getCartTotal());
		Map<Long, Integer> cart1 = new HashMap<>(user.getCart());
		user.getCart().clear();
		//System.out.println(user.getCart());
		order.setOrderItems(cart1);
		userRepository.save(user);
		Order saved=orderRepository.save(order);
		OrderDTO savedDTO=modelMapper.map(saved, OrderDTO.class);
		return savedDTO;
	}
	@Override
	public List<Order> getOrder(Long userId) {
		User user=userRepository.findById(userId).get();
		return orderRepository.findAllByUserID(user);
	}
	@Override
	public List<Order> getOrderHotel(Long hotelId) throws ResourceNotFoundException {
		Hotel hotel=hotelRepository.findById(hotelId).get();
		List<Order> list= orderRepository.findAllByHotelID(hotel);
		if(list.isEmpty()) {
			throw new ResourceNotFoundException("Order", "hotelId", 400L);
		}
		return list;	
	}
	@Override
	public Order updateOrderStatus(int statusId, int orderId) {
		Order order=orderRepository.findById(orderId).get();
		order.setOrderStatus(statusId);
		return orderRepository.save(order);
	}

}

/*
 * user cartTotal
 * order.setAmount(user.cartTotal)
 * */
