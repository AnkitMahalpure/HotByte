package com.hexa.hotbyte.model;

import java.time.LocalDateTime;
import java.util.HashMap;

import java.util.Map;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapKeyColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderID;
	//@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "user_ID")
	private User userID;
	//@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "hotel_ID")
	private Hotel hotelID;

	private float amount;
	private String note;
	private boolean isPaid;
	@CreationTimestamp
	private LocalDateTime orderTime;
	@UpdateTimestamp
	private LocalDateTime deliveryTime;
	private int orderStatus;

	@ElementCollection
	@CollectionTable(name = "order_items", joinColumns = @JoinColumn(name = "order_id"))
	@MapKeyColumn(name = "menu_item_id")
	@Column(name = "quantity")
	private Map<Long, Integer> orderItems = new HashMap<>();

	public Order() {
		super();
	}

	public Order(int orderID, User userID, Hotel hotelID, Set<MenuItem> menuItemList, float amount, String note,
			boolean isPaid, LocalDateTime orderTime, LocalDateTime deliveryTime, int orderStatus) {
		super();
		this.orderID = orderID;
		this.userID = userID;
		this.hotelID = hotelID;
		this.amount = amount;
		this.note = note;
		this.isPaid = isPaid;
		this.orderTime = orderTime;
		this.deliveryTime = deliveryTime;
		this.orderStatus = orderStatus;
	}

	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public User getUserID() {
		return userID;
	}

	public void setUserID(User userID) {
		this.userID = userID;
	}

	public Hotel getHotelID() {
		return hotelID;
	}

	public void setHotelID(Hotel hotelID) {
		this.hotelID = hotelID;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public boolean isPaid() {
		return isPaid;
	}

	public void setPaid(boolean isPaid) {
		this.isPaid = isPaid;
	}

	public LocalDateTime getOrderTime() {
		return orderTime;
	}

	public void setOrderTime(LocalDateTime orderTime) {
		this.orderTime = orderTime;
	}

	public LocalDateTime getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(LocalDateTime deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public int getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(int orderStatus) {
		this.orderStatus = orderStatus;
	}

	
	public Map<Long, Integer> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(Map<Long, Integer> orderItems) {
		this.orderItems = orderItems;
	}

	@Override
	public String toString() {
		return "Order [orderID=" + orderID + ", userID=" + userID + ", hotelID=" + hotelID + ", amount=" + amount
				+ ", note=" + note + ", isPaid=" + isPaid + ", orderTime=" + orderTime + ", deliveryTime="
				+ deliveryTime + ", orderStatus=" + orderStatus + ", orderItems=" + orderItems + "]";
	}
	
	
}