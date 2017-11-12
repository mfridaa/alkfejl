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
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Blanka Orosz
 */
@Controller
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    
    @GetMapping("/orders")
    public ResponseEntity<Iterable<Orders> > get(){
        Iterable<Orders> o = orderRepository.findAll();
        return ResponseEntity.ok(o);
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
}
