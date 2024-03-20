package com.hexa.hotbyte.dto;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.hexa.hotbyte.model.Address;
import com.hexa.hotbyte.model.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


public class HotelDTO1 {
	@NotBlank(message = "username is mandatory")
	@Size(max = 20,message = "Username should have a length between 0 and 20 characters.")
	private String username;
	private String password;
	@NotBlank(message = "Email is mandatory")
	@Email(message = "Please enter a valid email Id")
	private String email;
	private Role role;
	@NotBlank(message = "hotelName is mandatory")
	private String hotelName;
	private Address hotelAddress;
	private String hotelContactNumber;
	@Size(min = 8,max = 250,message = "Username should have a length between 8 and 12 characters.")
	private String hotelDescription;
	private List<String> hotelImagesList=new ArrayList<>();
	private boolean hotelIsActive;
	private LocalTime hotelStartTiming;
	private LocalTime hotelEndTiming;
	private int hotelRating;
	public HotelDTO1() {
		super();
		this.role=new Role(2L,"HOTEL");
	}
	public HotelDTO1(
			@NotBlank(message = "username is mandatory") @Size(min = 8, max = 12, message = "Username should have a length between 8 and 12 characters.") String username,
			String password,
			@NotBlank(message = "Email is mandatory") @Email(message = "Please enter a valid email Id") String email,
			Role role, @NotBlank(message = "hotelName is mandatory") String hotelName, Address hotelAddress,
			String hotelContactNumber,
			@Size(min = 8, max = 250, message = "Username should have a length between 8 and 12 characters.") String hotelDescription,
			List<String> hotelImagesList, boolean hotelIsActive, LocalTime hotelStartTiming, LocalTime hotelEndTiming,
			int hotelRating) {
		this();
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.hotelName = hotelName;
		this.hotelAddress = hotelAddress;
		this.hotelContactNumber = hotelContactNumber;
		this.hotelDescription = hotelDescription;
		this.hotelImagesList = hotelImagesList;
		this.hotelIsActive = hotelIsActive;
		this.hotelStartTiming = hotelStartTiming;
		this.hotelEndTiming = hotelEndTiming;
		this.hotelRating = hotelRating;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}
	public Address getHotelAddress() {
		return hotelAddress;
	}
	public void setHotelAddress(Address hotelAddress) {
		this.hotelAddress = hotelAddress;
	}
	public String getHotelContactNumber() {
		return hotelContactNumber;
	}
	public void setHotelContactNumber(String hotelContactNumber) {
		this.hotelContactNumber = hotelContactNumber;
	}
	public String getHotelDescription() {
		return hotelDescription;
	}
	public void setHotelDescription(String hotelDescription) {
		this.hotelDescription = hotelDescription;
	}
	public List<String> getHotelImagesList() {
		return hotelImagesList;
	}
	public void setHotelImagesList(List<String> hotelImagesList) {
		this.hotelImagesList = hotelImagesList;
	}
	public boolean isHotelIsActive() {
		return hotelIsActive;
	}
	public void setHotelIsActive(boolean hotelIsActive) {
		this.hotelIsActive = hotelIsActive;
	}
	public LocalTime getHotelStartTiming() {
		return hotelStartTiming;
	}
	public void setHotelStartTiming(LocalTime hotelStartTiming) {
		this.hotelStartTiming = hotelStartTiming;
	}
	public LocalTime getHotelEndTiming() {
		return hotelEndTiming;
	}
	public void setHotelEndTiming(LocalTime hotelEndTiming) {
		this.hotelEndTiming = hotelEndTiming;
	}
	public int getHotelRating() {
		return hotelRating;
	}
	public void setHotelRating(int hotelRating) {
		this.hotelRating = hotelRating;
	}
	
}
