package com.hexa.hotbyte.services;

import java.util.List;

import com.hexa.hotbyte.dto.HotelDTO;
import com.hexa.hotbyte.dto.HotelDTO1;
import com.hexa.hotbyte.exception.ResourceNotFoundException;
import com.hexa.hotbyte.model.Hotel;

public interface HotelService {
	HotelDTO findByUsername(String username);

	HotelDTO1 createHotel(HotelDTO1 hotel);
	
	Hotel createHotel1(Hotel hotel);

	List<HotelDTO> getAllHotel();

	List<HotelDTO> getAllHotelByName(String query) throws ResourceNotFoundException;

	List<HotelDTO> getAllHotelByCity(String query) throws ResourceNotFoundException;

	void deleteHotel(Long id) throws ResourceNotFoundException;

	Hotel findById(Long id);
}
