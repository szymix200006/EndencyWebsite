package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;

    @PostMapping("/email")
    public ResponseEntity<?> saveUser(@RequestBody UserRequest userRequest) {
        User userToAdd = userService.saveUser(userRequest);
        return ResponseEntity.ok().body(userToAdd);
    }
}
