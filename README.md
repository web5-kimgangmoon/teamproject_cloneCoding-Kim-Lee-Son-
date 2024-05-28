# 페이지 클론 코딩

- 구현하는데 골칫거리 첫번쨰 유동적으로 변화하는 페이지(웹페이지 크기를 줄이고 늘리면 페이지의 모양이 변한다.) (무조건 margin:auto로 해결해야함 왜냐하면 그렇게 주지 않을경우 페이지가 유동적으로 움직이지 않는다.)X
  (위치를 가운데로 잡아주고, 내용물에 따라 크기가 변화하도록만 해주면 된다, 그과정에서 margin auto나 grid나 flex나 아무거나 써줘도 된다.)
- 왼쪽의 광고가 문제, 이 경우는 js로 width를 조작해서 해결해야 할 것으로 보인다.

- 두번째 페이징(미해결)
- 세번째 오른쪽 광고의 슬라이드(해결(js만 추가하면 됨))
- 네번째 페이지 밑의 시간을 기준으로하는 버튼(미해결(시간이 부족할 듯 싶다.))

## 이슈사항들

issue 1. 화면에 음영이 생기고, 클릭 불가능 상태 적용, absoulte로는 도움말창이 따라오지 않음. (position:fixed로 해결)

issue 2. 페이지 폭을 마음대로 변경시켜줄 수 있는 기능이 있다.(bodyWidth, topCenter width 변경으로 해결)

issue 3. 페이지 폭에 따라 여러줄로 나뉘는 텍스트(두개의 div 사용, 한쪽은 flex:1과 min-width를 주고 한쪽은 width:100%를 주고, 페이지 폭이 변경되면 flex-direction을 변경하여 여러줄로 변하도록 만들었다.)

issue 4. div 안에 span을 넣고 박스모양을 주고 span 없이 물결글자를 적어줬는데, 영역을 벗어남(박스 모양을 가지는 class 작성, 해당 span들에 주고 물결글자를 span 영역에 넣어주었다.)

issue 5. 이름 옆에 제곱수처럼 쓰여진 텍스트를 어떻게 모양을 내줘야할지 찾아봤다.(아무리 고민해도 답이 안 나와서 실제 사이트에서 확인했더니 sup 태그를 이용, i 태그도 이용했었고 i태그는 글자를 기울려 써주는 태그이다.)

issue 6. select의 화살표 모양이 이상해서 확인해봤더니, 사이트에서 custom을 해놓은 상태였다.(appearance를 none으로 만들고, background 속성에서 svg를 추가했습니다. 그리고 padding-right를 실제 사이트에선 건드리지 말라고 아예 important까지 주었기에 padding-right에 1.4rem을 넣었습니다.(화살표가 차지하는 공간으로 최소한은 필요한 넓이로 보이며 사이트의 폰트 크기가 유동적으로 변화할때 최소한 차지해야 하는 넓이로 보입니다.))

issue 7. 실제 페이지는 색과 글자색이 변경가능합니다.(css 변수를 만들어 관리하는 방법을 쓰는 편이 좋겠습니다. 시간이 되면 해보겠습니다.)

issue 8. 실제 페이지에서 아이콘들을 유니코드도 아닌 의미모를 문자들을 css의 content 에 적어놨는데 icon들이 생성됐다.(ion.icons framework의 일부였다 검색해 찾아보고 svg 파일들을 다운로드했다)

isuue 9. iframe, iframe을 이용하는 편이 좋을까, 아니면 그대로 요소들을 추가해주는 편이 좋을까.

issue 10. display:contents는?(min-width, min-height를 쓰는 방법이 있다.)

issue 11. 부드러운 애니메이션 주기(hover와 focus말고 직접 넣고, 외곽선은 아예 명암을 이용해 미리 넣어두자.)(시간 있으면 outline에 대해서도 자세히 찾아보기)

## 개인적으로 느낀점

실제 페이지에서는 grid를 이용했고, 나는 flex를 이용했다. 하지만 나중에 기회가 되면, grid를 이용해 페이지를 만들어보고 싶다. 실제 페이지에서 grid를 쓰는걸 보니, 반응형 웹페이지를 만드는데 유용할 것 같아 보였다.

transition에 관련된 옵션 한 번 찾아보기.

## 템플릿 페이지 완성

기본 템플릿 페이지 완성했습니다.
top, body, footer로 css 파일들을 나눴습니다.

ps. body 쪽을 추가했습니다. 기본 템플릿 페이지 완성했습니다.

## test.html

기능확인용입니다.

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

## 참고자료들

https://www.codingfactory.net/13253

## 이용한 무료 아이콘 사이트들

https://ionic.io/ionicons
https://www.flaticon.com/kr/free-icon/bookmarks_1174447
<a href="https://kr.freepik.com/search#uuid=ea518db0-4f1f-452f-a1f9-b80d6a722ee9">Rizki Ahmad Fauzi 제작 아이콘</a>

### 댓글의 답글 찾기 알고리즘

댓글을 오래된 순으로(오름차순) 받아온다. 하나씩 댓글 확인, 댓글에서 답글 id가 존재한다면, 답글 id의 댓글 박스에 넣어준다.

이떄 댓글은 오래된 순서로 받아오기 때문에. 답글 id는 탐색해왔던 id 중에서 무조건 존재한다. 그렇게 댓글박스에는 답글박스가 존재하니 답글박스 안의 답글박스에 댓글박스를 넣어주는 식으로 이론상 무한히 반복 가능하다.

이 방법의 가장 좋은 점은 css를 위한 추가적인 js가 필요없다는 것이다.

단, 패딩이 너무 길어지면 유동적으로 조절해주는 css가 필요하다. 자손 결합자를 이용해서 패딩을 없애주면 될 것 같다.

실제 페이지의 구조를 살펴보고 생각하니 떠올랐다.

```html
<div class="commentBoardBox">
  <div class="commentBoard">
    <div class="commentBoard_top">
      <div class="writerView left_line">
        <a href="/">ㅇㅇ</a>
        <div class="checkIcon orangeCheckIcon imgIcon">
          <img src="./../../imgs/checkmark-outline.svg" />
        </div>
        <div class="imgIcon">
          <img src="./../../imgs/gameImg.jpg" />
        </div>
      </div>
      <div class="right_line">
        <div class="dateView etcBox">2024-05-27 18:59:02</div>
        <div class="reportButton etcBox">
          <a href="/">
            <div class="imgIcon">
              <img src="./../../imgs/alertImg.png" />
            </div>
            신고
          </a>
        </div>
        <div class="deleteButton etcBox">
          <a href="/">
            <div class="imgIcon">
              <img src="./../../imgs/trash.svg" />
            </div>
            삭제
          </a>
        </div>
        <div class="updateButton etcBox">
          <div class="imgIcon">
            <img src="./../../imgs/create-outline.svg" />
          </div>
          수정
        </div>
        <div class="replyButton etcBox">
          <div class="imgIcon">
            <img src="./../../imgs/arrow-undo.svg" />
          </div>
          답글
        </div>
        <div class="alarmButton etcBox">
          <a href="/">
            <div class="imgIcon">
              <img src="./../../imgs/notification-bell.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="commentBoard_content">
      <span class="remake_inform">*수정됨</span
      >ssssasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </div>
  </div>
  <div class="commentWritingBox commentUpdateBox out">
    <div class="commentWritingBox_top">
      <div class="commentWritingBox_leftLine">
        <div class="titleText">댓글 수정</div>
        <div class="writerInfoWrapper">
          <div class="writerInfo">
            <div class="imgIcon">
              <img src="./../../imgs/testimg.png" />
            </div>
            <span class="buttonText">하히후헤호</span>
          </div>
        </div>
      </div>
      <div class="commentWritingBox_rightLine">
        <button class="etcButton arcaCon">
          <div class="imgIcon">
            <img src="./../../imgs/happy-outline.svg" />
          </div>
          <span class="buttonText">아카콘</span>
        </button>
      </div>
    </div>
    <div class="commentWritingBox_content">
      <button class="commitButton">작성</button>
      <textarea
        class="commentInput"
        name="commentContent"
        maxlength="8000"
        placeholder="ㅇㅇㅇㅇㅇ"
      ></textarea>
    </div>
  </div>
  <div class="replyCommentBoardListBox">
    <div class="commentWritingBox commentReplyWritingBox out">
      <div class="commentWritingBox_top">
        <div class="commentWritingBox_leftLine">
          <div class="titleText">답글 작성</div>
          <div class="writerInfoWrapper">
            <div class="writerInfo">
              <div class="imgIcon">
                <img src="./../../imgs/testimg.png" />
              </div>
              <span class="buttonText">하히후헤호</span>
            </div>
          </div>
        </div>
        <div class="commentWritingBox_rightLine">
          <button class="etcButton arcaCon">
            <div class="imgIcon">
              <img src="./../../imgs/happy-outline.svg" />
            </div>
            <span class="buttonText">아카콘</span>
          </button>
        </div>
      </div>
      <div class="commentWritingBox_content">
        <button class="commitButton">작성</button>
        <textarea
          class="commentInput"
          name="commentContent"
          maxlength="8000"
          placeholder="ㅇㅇㅇㅇㅇ"
        ></textarea>
      </div>
    </div>
    <div class="replyCommentBoardBox">
      <div class="upIcon imgIcon">
        <img src="./../../imgs/caret-up-outline.svg" />
      </div>

      <div class="commentBoardBox">
        <div class="commentBoard">
          <div class="commentBoard_top">
            <div class="writerView left_line">
              <a href="/">ㅇㅇ</a>
              <div class="checkIcon orangeCheckIcon imgIcon">
                <img src="./../../imgs/checkmark-outline.svg" />
              </div>
              <div class="imgIcon">
                <img src="./../../imgs/gameImg.jpg" />
              </div>
            </div>
            <div class="right_line">
              <div class="dateView etcBox">2024-05-27 18:59:02</div>
              <div class="reportButton etcBox">
                <a href="/">
                  <div class="imgIcon">
                    <img src="./../../imgs/alertImg.png" />
                  </div>
                  신고
                </a>
              </div>
              <div class="deleteButton etcBox">
                <a href="/">
                  <div class="imgIcon">
                    <img src="./../../imgs/trash.svg" />
                  </div>
                  삭제
                </a>
              </div>
              <div class="updateButton etcBox">
                <div class="imgIcon">
                  <img src="./../../imgs/create-outline.svg" />
                </div>
                수정
              </div>
              <div class="replyButton etcBox">
                <div class="imgIcon">
                  <img src="./../../imgs/arrow-undo.svg" />
                </div>
                답글
              </div>
              <div class="alarmButton etcBox">
                <a href="/">
                  <div class="imgIcon">
                    <img src="./../../imgs/notification-bell.png" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="commentBoard_content">
            <span class="remake_inform">*수정됨</span
            >ssssasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </div>
        </div>
        <div class="commentWritingBox commentUpdateBox out">
          <div class="commentWritingBox_top">
            <div class="commentWritingBox_leftLine">
              <div class="titleText">댓글 수정</div>
              <div class="writerInfoWrapper">
                <div class="writerInfo">
                  <div class="imgIcon">
                    <img src="./../../imgs/testimg.png" />
                  </div>
                  <span class="buttonText">하히후헤호</span>
                </div>
              </div>
            </div>
            <div class="commentWritingBox_rightLine">
              <button class="etcButton arcaCon">
                <div class="imgIcon">
                  <img src="./../../imgs/happy-outline.svg" />
                </div>
                <span class="buttonText">아카콘</span>
              </button>
            </div>
          </div>
          <div class="commentWritingBox_content">
            <button class="commitButton">작성</button>
            <textarea
              class="commentInput"
              name="commentContent"
              maxlength="8000"
              placeholder="ㅇㅇㅇㅇㅇ"
            ></textarea>
          </div>
        </div>
        <div class="replyCommentBoardListBox">
          <div class="commentWritingBox commentReplyWritingBox out">
            <div class="commentWritingBox_top">
              <div class="commentWritingBox_leftLine">
                <div class="titleText">답글 작성</div>
                <div class="writerInfoWrapper">
                  <div class="writerInfo">
                    <div class="imgIcon">
                      <img src="./../../imgs/testimg.png" />
                    </div>
                    <span class="buttonText">하히후헤호</span>
                  </div>
                </div>
              </div>
              <div class="commentWritingBox_rightLine">
                <button class="etcButton arcaCon">
                  <div class="imgIcon">
                    <img src="./../../imgs/happy-outline.svg" />
                  </div>
                  <span class="buttonText">아카콘</span>
                </button>
              </div>
            </div>
            <div class="commentWritingBox_content">
              <button class="commitButton">작성</button>
              <textarea
                class="commentInput"
                name="commentContent"
                maxlength="8000"
                placeholder="ㅇㅇㅇㅇㅇ"
              ></textarea>
            </div>
          </div>
          <!-- <div class="replyCommentBoardBox">
                            <div class="upIcon imgIcon"><img src="./../../imgs/caret-up-outline.svg" /></div>
                          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>
```

댓글의 형태는 이런식, 솔직히 내가 만들었는데도 헷갈린다.
