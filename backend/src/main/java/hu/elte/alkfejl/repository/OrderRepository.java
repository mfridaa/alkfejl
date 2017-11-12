package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Orders;
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
public interface OrderRepository extends CrudRepository<Orders, Long> {
    Optional<Orders> findById(Long id);
    
    List<Orders> findAllByStatus(Boolean status);
    List<Orders> findAllByOrderDate(Date orderDate);
}
