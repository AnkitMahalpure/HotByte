package com.hexa.hotbyte.services;

import java.util.List;
import java.util.Map;

import com.hexa.hotbyte.dto.UserDTO;
import com.hexa.hotbyte.model.Order;
import com.hexa.hotbyte.model.User;

import jakarta.validation.Valid;

public interface UserService {

	User findByUsername(String username);

	public UserDTO createUser(@Valid UserDTO user);

	public List<User> getUsers();

	public void addToCart(int userId, Long menuItemId, int quantity);

	public void removeFromCart(int userId, Long menuItemId, int quantity);

	public void placeOrder(int userId, Order order);

	User createUser1(User user);

	Map getCart(Long userId);
}
