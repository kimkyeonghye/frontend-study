/**
 * prompt 창으로 입력받은 값은 기본적으로 문자형타입으로 지정
 */

/**
 * ! 문제1
 *   : 반지름 r 변수를 선언하고 10으로 초기화
 *   : 반지름이 10이 원의 넓이(PI * 반지름 * 반지름)를 구하시오.
 *   : 3.14의 파이값은 상수로 선언 및 초기화
 *
 *    ? 출력(템플릿 문자열 사용하여 콘솔에 출력)
 *      - '넓이 : 314'
 */
const r = 10;
const PI = 3.14;
console.log(`넓이: ${PI * r * r}`);

/**
 * ! 문제 2
 *   : 사용자로부터 숫자를 입력받아 inch를 cm단위로 변환하여 출력하는 프로그램 제작
 *   : 1 inch = 2.54cm
 *
 *   ? 출력(alert 메소드로 출력) - 5inch는 12.7cm입니다.
 */
// 사용자로부터 입력받음
let num = prompt('숫자를 입력해주세요.', '1');
const inch = 2.54;
// 출력
alert(`${num} inch는 ${+num * inch}cm 입니다.`);