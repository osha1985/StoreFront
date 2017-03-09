package com.revature.data;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    @Override
    <S extends Product> S save(S product);

    @Override
    Product findOne(String id);

    @Override
    List<Product> findAll();

    @Override
    void deleteAll();



}
