package com.revature.data;

import org.springframework.data.annotation.Id;
import java.util.List;


public class Cart {

    @Id
    private int cartId;
    private int userId;
    private List<Item> items;

    public Cart() {
        super();
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
