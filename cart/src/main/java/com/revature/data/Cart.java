package com.revature.data;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

@Document
public class Cart implements Iterable<Item> {

    @Id
    private String cartId;
    private List<Item> items;

    public String getCartId() {
        return cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public List<Item> getItems() {
        return items;
    }

    public Cart setItems(List<Item> items) {
        this.items = items;
        return this;
    }

    @Override
    public Iterator<Item> iterator() {
        return (items != null
                ? Collections.unmodifiableList(items).iterator()
                : Collections.emptyIterator());
    }

    public Cart add(Item item) {
        if (items == null) {
            items = new ArrayList<>();
        }
        items.add(item);
        return this;
    }

}
