package com.hexa.hotbyte.dto;

import com.hexa.hotbyte.model.Address;
import com.hexa.hotbyte.model.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
	@NotBlank(message = "username is mandatory")
	@Size(min = 8,max = 12,message = "Username should have a length between 8 and 12 characters.")
	private String username;
	private String password;
	@NotBlank(message = "Email is mandatory")
	@Email(message = "Please enter a valid email Id")
	private String email;
	private String userGender;
	private String userContactNumber;
	private Role role;
	private Address address;
	public UserDTO() {
		super();
		this.role=new Role(1L,"USER");
	}
	public UserDTO(String username, String password, String email, String userGender, String userContactNumber,
			Address address) {
		this();
		this.username = username;
		this.password = password;
		this.email = email;
		this.userGender = userGender;
		this.userContactNumber = userContactNumber;
		this.address = address;
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
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserContactNumber() {
		return userContactNumber;
	}
	public void setUserContactNumber(String userContactNumber) {
		this.userContactNumber = userContactNumber;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "UserDTO [username=" + username + ", password=" + password + ", email=" + email + ", userGender="
				+ userGender + ", userContactNumber=" + userContactNumber + ", address=" + address + "]";
	}
	
	
}
