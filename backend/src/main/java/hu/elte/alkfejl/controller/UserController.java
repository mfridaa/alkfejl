package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import hu.elte.alkfejl.service.Session;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private Session session;
    @GetMapping("/users")
    public ResponseEntity<User> get(){
        User u = userRepository.findById(new Long(0));
        System.out.println(u.getUsername());
        return ResponseEntity.ok(u);
    }

    @PostMapping("/registration")
    @Role({User.Role.GUEST})
    public ResponseEntity regist(@RequestBody User user){
        try{
            userRepository.save(user);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        };
        return ResponseEntity.ok().build();
    }
    
    @Role({User.Role.GUEST})
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user){
        Optional<User> u = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if(u.isPresent()){
            session.setUser(u.get());
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
