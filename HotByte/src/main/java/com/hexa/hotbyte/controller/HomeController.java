package com.hexa.hotbyte.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.model.Hotel;
import com.hexa.hotbyte.model.MenuItem;
import com.hexa.hotbyte.services.AdminService;
import com.hexa.hotbyte.services.HotelService;
import com.hexa.hotbyte.services.MenuItemService;
import com.hexa.hotbyte.services.UserService;


@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {
	@Autowired
	private UserService userService;
	@Autowired
	private HotelService hotelService;
	@Autowired
	private MenuItemService menuItemService;
	@Autowired
	private AdminService adminService;
	
	
	@GetMapping("/all-hotel")
	public ResponseEntity<List<HotelDTO>> getAllHotel(){
		return ResponseEntity.ok().body(hotelService.getAllHotel());
	}
	
	@GetMapping("/all-hotel/byname")
	public ResponseEntity<List<HotelDTO>> getAllHotelByName(@RequestParam String query) throws ResourceNotFoundException{
		return ResponseEntity.ok().body(hotelService.getAllHotelByName(query));
	}
	
	@GetMapping("/all-hotel/bycity")
	public ResponseEntity<List<HotelDTO>> getAllHotelByCity(@RequestParam String query) throws ResourceNotFoundException{
		return ResponseEntity.ok().body(hotelService.getAllHotelByCity(query));
	}
	
	@GetMapping("/hotel/isveg")
	public ResponseEntity<List<MenuItem>> getAllMenuItemByIsVeg(@RequestParam Long hotelId,String query){
		return ResponseEntity.ok().body(menuItemService.getAllMenuItemByIsVeg(hotelId,query));
	}
	
	@GetMapping("/hotel/itemtype")
	public ResponseEntity<List<MenuItem>> getAllMenuItemByItemType(@RequestParam Long hotelId,String query){
		return ResponseEntity.ok().body(menuItemService.getAllMenuItemByItemType(hotelId,query));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
		Hotel hotel = hotelService.findById(id);
		return ResponseEntity.ok(hotel);
	}
	
	@GetMapping("/menu/{hotelID}")
	public ResponseEntity<List<MenuItem>> fetchAllMenu(@PathVariable Long hotelID)
	{
		return ResponseEntity.ok().body(menuItemService.fetchAllMenu(hotelID));
	}
	
//	@PostMapping("/xyz")
//	public ResponseEntity<Void> xyz(){
//		adminService.createAdmin();
//		System.out.println("Admin create");
//		return null;
//	}
	
}
/* 
 * //JPQL
	@Query("SELECT p FROM Product p WHERE" + " p.name LIKE CONCAT ('%',:query,'%')" + " OR p.description LIKE CONCAT"
			+ "('%',:query,'%')")
	List<Product> searchProducts(String query);
*/
