package com.revature.config;


import com.revature.data.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class ProductConfig extends RepositoryRestMvcConfiguration {
    @Override
    public RepositoryRestConfiguration config() {
        return super.config().exposeIdsFor(Product.class);
    }
}
