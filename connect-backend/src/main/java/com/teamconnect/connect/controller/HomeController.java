package com.teamconnect.connect.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@RequestMapping("/hello")
	public @ResponseBody String Home() {
		return "Hello";
	}
}
