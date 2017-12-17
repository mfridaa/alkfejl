package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import hu.elte.alkfejl.entity.Category;

import java.util.List;
import java.util.Optional;
import javax.persistence.PreRemove;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    Optional<Product> findById(Long id);
    List<Product> findAllByName(String name);
    
    @Query("SELECT p FROM Product p JOIN p.categories cp WHERE cp.id = ?1")
    List<Product> selectProducts(Long id);
    
   // @Query("DELETE FROM Product.categories cp WHERE cp.id = ?1")
    //void deleteCategory(Long id);
}

