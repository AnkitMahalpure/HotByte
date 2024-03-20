package com.hexa.hotbyte.repository;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexa.hotbyte.model.Hotel;

import jakarta.transaction.Transactional;

@Transactional
@SpringBootTest
public class HotelRepositoryTest {
	public final static Logger LOGGER=Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
	@Autowired
	HotelRepository hotelRepository;
	@Disabled
	@Test
	public void findHotelByIDTest() {
		Hotel hotel=hotelRepository.findById(1L).get();
		LOGGER.log(Level.INFO, "Hotel found "+hotel.getHotelName());
	}
	
	@Test
	public void findHotelByUsername() {
		Hotel hotel=hotelRepository.findByUsername("ocean_view");
		LOGGER.log(Level.INFO, "Hotel found "+hotel.getHotelName());
	}
}
