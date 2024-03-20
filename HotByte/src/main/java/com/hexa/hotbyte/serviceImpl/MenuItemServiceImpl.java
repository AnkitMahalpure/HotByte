package com.hexa.hotbyte.serviceImpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.dto.MenuItemDTO;
import com.hexa.hotbyte.model.MenuItem;
import com.hexa.hotbyte.repository.MenuItemRepository;
import com.hexa.hotbyte.services.MenuItemService;
@Service
public class MenuItemServiceImpl implements MenuItemService {
	@Autowired
	MenuItemRepository menuItemRepository;
	@Autowired
	ModelMapper modelMapper;

	@Override
	public MenuItemDTO saveMenuItem(MenuItemDTO menuItem) {
		MenuItem m=modelMapper.map(menuItem,MenuItem.class);
		menuItemRepository.saveMenuItem(menuItem.getMenuItemName(), menuItem.getHotelID(), menuItem.getMenuItemImage(),
                menuItem.getMenuItemPrice(), menuItem.getMenuItemType(), menuItem.getMenuItemDescription(),
                menuItem.getIsVeg(), menuItem.getMenuItemRating());

		MenuItemDTO d= menuItem;
		//return modelMapper.map(savedmenu,MenuItemDTO.class);
		return d;
	}
	
	@Override
	public List<MenuItem> getAllMenuItemByIsVeg(Long hotelId, String query) {
		return menuItemRepository.searchIsVeg(hotelId, query);
	}

	@Override
	public List<MenuItem> getAllMenuItemByItemType(Long hotelId, String query) {
		
		return menuItemRepository.searchMenuType(hotelId, query);
	}

	@Override
	public List<MenuItem> fetchAllMenu(Long hotelID) {
		
		return menuItemRepository.findAllByHotelID(hotelID);
	}
	
	@Override
	public MenuItem getMenuItemByID(Long id){
		return menuItemRepository.findById(id).get();
	}

}
