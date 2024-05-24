# 페이지 클론 코딩

- 걸리는 시간 확인으로 일부라도 만들어보자

- 구현하는데 골칫거리 첫번쨰 유동적으로 변화하는 페이지(웹페이지 크기를 줄이고 늘리면 페이지의 모양이 변한다.) (무조건 margin:auto로 해결해야함 왜냐하면 그렇게 주지 않을경우 페이지가 유동적으로 움직이지 않는다.)
- 왼쪽의 광고가 문제, 이 경우는 js로 width를 조작해서 해결해야 할 것으로 보인다.

- 두번째 페이징
- 세번째 오른쪽 광고의 슬라이드
- 네번째 페이지 밑의 시간을 기준으로하는 버튼

필요한 것(상단창)
채널 span 공백쓰지 않도록나누기(해결)(두번째 span에 띄어쓰기 이용)
버튼 누르거나 notification 읽으면 회색으로 변하도록(css완성 js 미완성)
검색 로딩창(keyFrames 이용해서 만들기)(완성)

창을 줄였을때 변화 추가하기
도움말 창
표시설정창
position fixed와 bottom(위치 잡기)를 container 박스의 css에 넣어 화면 고정시키기
subTop 수정 필요 overflow eclipse

페이지 폭을 변경시키는 코드를 추가해주자
페이지 변경에는 bodyWidthBox와 topCenter의 폭을 변경시켜주는 방식으로 해주고, 그다음에는 display: none을 광고 상자들에 적용시켜주자.

issue 1. 화면에 음영이 생기고, 클릭 불가능 상태 적용, absoulte로는 도움말창이 따라오지 않음.(position:fixed로 해결)
issue 2. 페이지 폭을 마음대로 변경시켜줄 수 있는 기능이 있다.(bodyWidth div로 해결)

상단 js
클릭시 해당 박스 출력

## position:absolute

- position absolute에 대해
- left right
- top bottom
- 어느것을 쓰느냐에 따라서 기준을 선택할 수 있다.
- 예를 들어 left의 경우 넓이가 넓어지거나 좁아지면 왼쪽을 기준으로 오른쪽으로 늘어나며 반대의 경우는 오른쪽에서 왼쪽으로 늘어난다. 그리고 두 가지를 모두 사용할 경우(top, bottom 혹은 right, left)

- 하지만 두가지 동시에 쓰기도 하니까 또 달라지던데 뭔 차이일까.
- html에서 건드려보고 확인했더니,
- right나 left 둘 중 아무것도 건들지 않으면 일반적인 static position의 요소처럼 같은 블록 안에서 다음 자리에 자리잡게 된다.
- 그러나 right나 left를 쓸 경우 각각, 오른쪽 끝, 왼쪽 끝에 자리잡게 된다.

<a href="https://kr.freepik.com/search#uuid=ea518db0-4f1f-452f-a1f9-b80d6a722ee9">Rizki Ahmad Fauzi 제작 아이콘</a>
pngwing.com 무료 아이콘 이용
