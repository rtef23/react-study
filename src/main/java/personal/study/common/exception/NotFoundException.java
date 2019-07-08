/**
 copyright by NAVER corp
 writer : JooYoung ,Song
 date : 2019-07-08
 */

package personal.study.common.exception;

/**
 * @author JooYoung ,Song
 */
public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}
