package com.travelsmile;

import com.travelsmile.model.User;
import com.travelsmile.service.JwtService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.*;

@SpringBootTest
public class JwtServiceTest {
    @Autowired JwtService jwtService;

    @Test
    void testToken() {
        var user = new User();
        user.setEmail("test@jwt.com");
        var token = jwtService.generateToken(user);
        assertThat(jwtService.extractUsername(token)).isEqualTo("test@jwt.com");
    }
}
