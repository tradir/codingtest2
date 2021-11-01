## FrontEnd Coding Test

## 기본 세팅

- [x] styled-components 사용
- [x] 유저가 처음 페이지를 열었을 때 `/home` 에 도착하도록 만들어 주세요
- [ ] 개인적으로 추가하고 싶은 디자인은 자유롭게 추가하셔도 됩니다 😊

## 필수 기능

- [x] 홈페이지에서 `/beerlist` 로 링크 이동할 수 있어야 합니다
- [x] material table library(https://material-table.com/#/docs/get-started) 를 사용해서 맥주 리스트 페이지(/beerlist)를 만들어 주세요
- [ ] 테이블의 column header 는 드래그로 순서 변경이 가능해야 합니다. 바뀐 column header 순서는 redux 에 저장되어 `/home` 와 `/beerlist` 사이 이동시에 유지되어야 합니다(위 라이브러리에서 드래그 기능 지원)
- [ ] 맥주 리스트의 알콜 도수 `(abv)` 필터 기능을 만들어 주세요 [ 예) "5-6", "6-7" ]
- [ ] 필터는 다중 선택이 가능해야 합니다
- [ ] 필터 기능은 material table library 에 포함되어 있는 기능을 `사용하지 말고` 따로 제작해야 합니다

## 선택사항

- [ ] 맥주 이름을 클릭했을 때 해당 맥주의 상세 정보를 볼 수 있는 modal 을 제작해 주세요
- [ ] 장바구니를 만들어 주세요
- [ ] 맥주를 장바구니에 추가하거나 삭제가 가능해야 합니다
- [x] 장바구니는 `/home` 또는 `/beerlist` 에서 접근 가능해야 합니다

참조 사이트

- [컬럼수정](https://stackoverflow.com/questions/62539462/material-table-how-change-width-of-the-columns)
- [actions명 변경](https://github.com/mbrn/material-table/issues/404)
- [actions명 변경](https://stackoverflow.com/questions/66454532/material-ui-material-table-tablepagination-issue-react)
- [액션 클릭시 함수 추가](https://stackoverflow.com/questions/59781114/changing-the-style-of-actions-in-material-table-react)
- [데브툴즈](https://github.com/zalmoxisus/redux-devtools-extension)
- [페이지네이션 관련](https://material-table.com/#/docs/all-props)
- [useLoaction](https://den-shin.tistory.com/m/40)

- [에러](https://stackoverflow.com/questions/67418186/error-storing-data-domexception-failed-to-execute-setitem-on-storage-setti)

- [수제맥주 기준](https://pubbronx.tistory.com/6)

- [LOCALFORAGE](https://localforage.github.io/localForage/)
- [LOCALFORAGE](http://hacks.mozilla.or.kr/2014/05/localforage-offline-storage-improved-2/)
- [LOCALFORAGE](https://github.com/localForage/localForage)
- [로컬지우기](https://laracasts.com/discuss/channels/laravel/failed-to-execute-setitem-on-storage-setting-the-value-of-136114546-exceeded-the-quota-vue)
  좋은 방법은 아님, 사용자에게 지우라고 할 수 없슴
