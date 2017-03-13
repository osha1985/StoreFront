package com.revature.repository;

import com.revature.data.Customer;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends MongoRepository<Customer, Integer> {
    @Override
    <S extends Customer> S save(S customer);

    @Override
    Customer findOne(Integer integer);

    @Override
    List<Customer> findAll();

    @Override
    List<Customer> findAll(Sort sort);

    Customer findOneByLastName(@Param("lastName") String lastName);

    Customer findOneByFirstName(@Param("firstName") String firstName);

}

