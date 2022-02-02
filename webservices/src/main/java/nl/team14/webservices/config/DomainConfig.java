package nl.team14.webservices.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan("nl.team14.webservices.model")
@EnableJpaRepositories("nl.team14.webservices.repository")
@EnableTransactionManagement
public class DomainConfig {
}
