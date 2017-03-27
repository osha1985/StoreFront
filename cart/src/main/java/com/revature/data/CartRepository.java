package com.revature.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartRepository extends MongoRepository <Cart, String> {

    //insert a new cart or update if id already exist
    <S extends Cart> S save (S cart);

    //find by cart id
    Cart findOne(String id);

    @Override
    List<Cart> findAll();

    Cart findByCustomerId(@Param("customerId") String customerId);




}
