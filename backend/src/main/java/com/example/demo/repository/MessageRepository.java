package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import entity.Message;

@RepositoryRestResource(collectionResourceRel = "Message", path = "message")
public interface MessageRepository extends MongoRepository<Message, String> {

}
