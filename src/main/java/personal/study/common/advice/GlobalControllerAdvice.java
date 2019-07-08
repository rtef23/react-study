/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study.common.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.extern.slf4j.Slf4j;
import personal.study.common.exception.NotFoundException;

/**
 * @author JooYoung ,Song
 */
@Slf4j
@ControllerAdvice
public class GlobalControllerAdvice {
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NotFoundException.class)
    public void handleNotFoundException(NotFoundException notFoundException){
        //do log
    }
}
