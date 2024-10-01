package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity(name = "User")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter

public class User {
    @Valid
    @Id
    @GeneratedValue(generator = "id_seq_user")
    @SequenceGenerator(name = "id_seq_user", sequenceName = "id_sequence_user", initialValue = 1, allocationSize = 1)
    private long id;

    @NotBlank(message = "Email cannot be blank")
    @NotNull(message = "Email cannot be null")
    private String email;
}
