package com.revature.repository;

import com.revature.data.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    @Override
    <S extends Customer> S save(S customer);

    @Override
    Customer findOne(String id);

    @Override
    List<Customer> findAll();

    Customer findByUsername(@Param("username") String username);

}

