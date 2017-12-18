package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Category;
import hu.elte.alkfejl.entity.Orders;
import hu.elte.alkfejl.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * 
 */
@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
