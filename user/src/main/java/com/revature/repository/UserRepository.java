package com.revature.repository;

import com.revature.data.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RestResource
public interface UserRepository extends MongoRepository<User, Integer> {
    @Override
    <S extends User> S save(S user);

    @Override
    User findOne(Integer integer);

    @Override
    List<User> findAll();
}
