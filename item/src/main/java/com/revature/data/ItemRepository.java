package com.revature.data;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemRepository extends MongoRepository <Item, String> {

    //insert a new cart or update if id already exist
    <S extends Item> S save (S item);

    //find by cart id
    Item findOne(String id);

    @Override
    List<Item> findAll();


}
