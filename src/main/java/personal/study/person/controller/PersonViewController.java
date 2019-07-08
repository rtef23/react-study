/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study.person.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author JooYoung ,Song
 */
@Controller("/view")
public class PersonViewController {
    @GetMapping("/home")
    public String home(){
        return "";
    }
}
