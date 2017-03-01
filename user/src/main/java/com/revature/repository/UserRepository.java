package com.revature.repository;

import com.revature.data.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends MongoRepository<User, Integer> {
    @Override
    <S extends User> S save(S user);

    @Override
    User findOne(Integer integer);

    @Override
    List<User> findAll();

    @Override
    List<User> findAll(Sort sort);

    User findOneByLastName(@Param("lastName") String lastName);

    User findOneByFirstName(@Param("firstName") String firstName);

}

