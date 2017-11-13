/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.alkfejl.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
/**
 *
 * @author Blanka Orosz
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Category extends BaseEntity{
    @Column
    @Enumerated(EnumType.STRING)
    private CategoryName name;

    public enum CategoryName {
        ART, HOME, TECH, WOMEN, MEN
    }
    
    @ManyToMany(mappedBy = "categories")
    @JsonIgnore
    private Set<Product> products;
}
