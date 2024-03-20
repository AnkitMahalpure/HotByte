package com.hexa.hotbyte.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexa.hotbyte.model.Admin;
import com.hexa.hotbyte.model.Role;
import com.hexa.hotbyte.repository.AdminRepository;
import com.hexa.hotbyte.services.AdminService;
@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired 
	AdminRepository adminRepository;
	@Override
	public Admin createAdmin() {
		Admin a1=new Admin();
		a1.setUsername("ankit");
		a1.setEmail("ankitmahalpure@gmail.com");
		a1.setPassword(passwordEncoder.encode("ankit"));
		Role role=new Role();
		role.setName("ADMIN");
		role.setRoleId(3L);
		a1.setRole(role);
		return adminRepository.save(a1);
	}

}
