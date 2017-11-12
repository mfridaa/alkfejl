package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 
 */
@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    Optional<Product> findById(Long id);
    
    /*List<Product> findAllByCategory(String category);*/
    List<Product> findAllByName(String name);
}

