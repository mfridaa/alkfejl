/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Orders;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.OrderRepository;
import hu.elte.alkfejl.repository.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Blanka Orosz
 */
@Controller
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderRepository orderRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Orders> > get(){
        Iterable<Orders> o = orderRepository.findAll();
        return ResponseEntity.ok(o);
    }
    
    @GetMapping("/{id}")
    @Role({User.Role.ADMIN})
    public ResponseEntity<Orders> getOne(@PathVariable Long id) {
        Orders order = orderRepository.findOne(id);
        return ResponseEntity.ok(order);
    }
    
    @PostMapping("/addOrder")
    @Role({User.Role.USER, User.Role.ADMIN})
    public ResponseEntity addOrder(@RequestBody Orders order){
        try{
            orderRepository.save(order);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/deleteOrder")
    @Role({User.Role.USER, User.Role.ADMIN})
    public ResponseEntity deleteOrder(@RequestBody Orders order){
        try{
            orderRepository.delete(order);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
    
    @PatchMapping("/updateOrder")
    @Role({User.Role.USER, User.Role.ADMIN})
    public ResponseEntity updateOrder(@RequestBody Orders order){
        try{
            orderRepository.save(order);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<Iterable<Orders> > getAllByUserId(@PathVariable Long userId) {
        User user = userRepository.findOne(userId);
        Iterable<Orders> orders = orderRepository.findAllByUser(user);
        return ResponseEntity.ok(orders);
    }
}
