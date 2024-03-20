package com.hexa.hotbyte.dto;

import com.hexa.hotbyte.model.Hotel;
import com.hexa.hotbyte.model.User;



public class OrderDTO {
	private User user;
	private Hotel hotel;
	private float amount;
	private String note;
	private boolean isPaid;
	private int orderStatus;
	public OrderDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderDTO(User userID, Hotel hotelID, float amount, String note, boolean isPaid, int orderStatus) {
		super();
		this.user = userID;
		this.hotel = hotelID;
		this.amount = amount;
		this.note = note;
		this.isPaid = isPaid;
		this.orderStatus = orderStatus;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
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
	public int getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(int orderStatus) {
		this.orderStatus = orderStatus;
	}
	@Override
	public String toString() {
		return "OrderDTO [userID=" + user + ", hotelID=" + hotel + ", amount=" + amount + ", note=" + note
				+ ", isPaid=" + isPaid + ", orderStatus=" + orderStatus + "]";
	}
	
}
