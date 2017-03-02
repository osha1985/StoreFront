package com.revature.data;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Item {

    @Id
    private int itemId;
    private Product product;
    private int quantity;

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Item() {
        super();
    }
}
