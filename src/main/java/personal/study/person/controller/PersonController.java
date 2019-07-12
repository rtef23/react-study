/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study.person.controller;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import personal.study.common.exception.NotFoundException;
import personal.study.person.model.Person;

/**
 * @author JooYoung ,Song
 */
@RestController
public class PersonController {
    private List<Person> people = Arrays.asList(
        new Person("id1", "person1", LocalDate.of(1990, 11, 29)),
        new Person("id2", "person2", LocalDate.of(1993, 1, 3)),
        new Person("id3", "person3", LocalDate.of(1995, 2, 6)),
        new Person("id4", "person4", LocalDate.of(1994, 7, 9)),
        new Person("id5", "person5", LocalDate.of(1982, 6, 30))
    );

    @GetMapping("/people")
    public List<Person> getPeople() {
        return people;
    }

    @GetMapping("/people/{personId}")
    public Person getPerson(@PathVariable String personId) {
        return people.stream()
            .filter(person -> StringUtils.equals(personId, person.getId()))
            .findFirst()
            .orElseThrow(() -> new NotFoundException("no person founded."));
    }
}
