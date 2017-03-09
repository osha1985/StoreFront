package com.revature.data;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CartRepository extends MongoRepository <Cart, String> {

    //insert a new cart or update if id already exist
    <S extends Cart> S save (S item);

    //find by cart id
    Cart findOne(String id);

    @Override
    List<Cart> findAll();


}
