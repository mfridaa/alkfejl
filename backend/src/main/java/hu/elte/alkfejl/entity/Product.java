/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

/**
 *
 * @author Blanka Orosz
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Product extends BaseEntity {
    @Column(nullable = false)
    private String name;
    
    @Column
    private Long price;
    
    @Column
    private String picture;
    
    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private List<Orders> order;
    
    @ManyToMany()
    @JsonIgnore
    @JoinTable(name = "CATEGORY_PRODUCT",
        joinColumns = @JoinColumn(name = "products_id"),
        inverseJoinColumns = @JoinColumn(name = "categories_id")
    )
    private List<Category> categories = new ArrayList();
}
