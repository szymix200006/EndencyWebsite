package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final EmailSenderService emailSenderService;

    public User saveUser(UserRequest user) {
        User userToAdd = User.builder().email(user.getEmail()).build();
        System.out.println(userToAdd.getEmail());

        emailSenderService.sendEmail(userToAdd.getEmail(), "Welcome to Endency", "You will get notifications on updates here");

        return userRepository.save(userToAdd);
    }
}
