/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study.person.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author JooYoung ,Song
 */
@AllArgsConstructor
@Data
public class Person {
    private String id;
    private String name;
    private LocalDate birthDay;
}
