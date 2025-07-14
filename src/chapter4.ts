/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // (animal as Dog): animal을 강아지처럼 간주해줘라는 뜻. 강제로 Dog 타입처럼 쓴다는 말.
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if (isCat(animal)) {
    // 고양이
    animal;
  }
}
