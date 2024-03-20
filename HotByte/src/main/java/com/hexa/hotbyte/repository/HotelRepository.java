package com.hexa.hotbyte.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hexa.hotbyte.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
	Hotel findByUsername(String username);

	// JPQL
	@Query("SELECT h FROM Hotel h WHERE h.hotelName LIKE CONCAT ('%',:query,'%')")
	List<Hotel> searchHotelByName(String query);
	
	@Query("SELECT h FROM Hotel h WHERE h.hotelAddress.city LIKE CONCAT ('%',:query,'%')")
	List<Hotel> searchHotelByCity(String query);
}
