/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Orders;
import hu.elte.alkfejl.entity.Product;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.ProductRepository;
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
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    
    @GetMapping("/allproducts")
    public ResponseEntity<Iterable<Product> > getAllProduct(){
        Iterable<Product> p = productRepository.findAll();
        return ResponseEntity.ok(p);
    }
    
    @GetMapping("/productById")
    public ResponseEntity<Product > productById(Long id){
        Optional<Product> p = productRepository.findById(id);
        return ResponseEntity.ok(p.get());
    }
    
    @PostMapping("/addProduct")
    @Role({User.Role.ADMIN})
    public ResponseEntity addOrder(@RequestBody Product product){
        try{
            productRepository.save(product);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/deleteProduct")
    @Role({User.Role.ADMIN})
    public ResponseEntity deleteOrder(@RequestBody Product product){
        try{
            productRepository.delete(product);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
    
    @PatchMapping("/updateProduct")
    @Role({User.Role.ADMIN})
    public ResponseEntity updateOrder(@RequestBody Product product){
        try{
            productRepository.save(product);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }
}
