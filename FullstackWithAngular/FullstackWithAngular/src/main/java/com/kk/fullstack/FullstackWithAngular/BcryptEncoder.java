package com.kk.fullstack.FullstackWithAngular;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoder {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();
		String encodedString = encoder.encode("password1@");
		System.out.println("PPPPPPPPPPP ===> "+encodedString);
	}
}
