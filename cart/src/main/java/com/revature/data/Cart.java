package com.revature.data;

import org.springframework.data.annotation.Id;
import java.util.List;


public class Cart {

    @Id
    private String cartId;
    private Integer userId;
    private List<Product> products;

    public String getCartId() {
        return cartId;
    }

    public void setCartId(String cartId) {
        this.cartId = cartId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
