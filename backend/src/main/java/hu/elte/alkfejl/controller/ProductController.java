/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Category;
import hu.elte.alkfejl.entity.Orders;
import hu.elte.alkfejl.entity.Product;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.CategoryRepository;
import hu.elte.alkfejl.repository.ProductRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PreRemove;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
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
@RequestMapping("/api/product")
public class ProductController {
    
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Product> > get(){
        Iterable<Product> p = productRepository.findAll();
        return ResponseEntity.ok(p);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Product> getOne(@PathVariable Long id) {
        Product product = productRepository.findOne(id);
        return ResponseEntity.ok(product);
    }
    
    @GetMapping("/productByName")
    public ResponseEntity<List<Product> > productByName(String name){
        List<Product> p = productRepository.findAllByName(name);
        return ResponseEntity.ok(p);
    }
    
    @GetMapping("/productByCategory/{id}")
    public ResponseEntity<List<Product> > productByCategory(@PathVariable Long id){
        List<Product> p = productRepository.selectProducts(id);
        return ResponseEntity.ok(p);
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
    
    @DeleteMapping("/{id}")
    @Role({User.Role.ADMIN})
    public ResponseEntity delete(@PathVariable Long id) {
        productRepository.delete(id);
        Iterable<Product> product = productRepository.findAll();
     //   productRepository.deleteCategory(id);
        return ResponseEntity.ok(product);
    }
    
    @PostMapping("/newProduct/{id}")
    @Role({User.Role.ADMIN})
    public ResponseEntity create(@RequestBody Product product, @PathVariable Long id){
        Category category = categoryRepository.findOne(id);
        product.getCategories().add(category);
        Product saved = productRepository.save(product);
        return ResponseEntity.ok(saved);
    }
    
    /*@PatchMapping("/updateProduct")
    @Role({User.Role.ADMIN})
    public ResponseEntity updateOrder(@RequestBody Product product){
        try{
            productRepository.save(product);
        }catch(Exception e){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().build();
    }*/
}
