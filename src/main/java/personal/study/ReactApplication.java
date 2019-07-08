/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author JooYoung ,Song
 */
@SpringBootApplication
public class ReactApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(ReactApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(ReactApplication.class, args);
    }
}
