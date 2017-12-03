package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @GetMapping("")
    public ResponseEntity<Iterable<User>> getAll() {
        Iterable<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getOne(@PathVariable Long id) {
        User user = userRepository.findOne(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping("")
    public ResponseEntity<User> create(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));    
        User saved = userRepository.save(user);
        return ResponseEntity.ok(saved);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        User current = userRepository.findOne(id);
        current.setUsername(user.getUsername());
        User saved = userRepository.save(current);
        return ResponseEntity.ok(saved);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        userRepository.delete(id);
        Iterable<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
