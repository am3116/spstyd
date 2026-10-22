/* ─────────────────────────────────────────────
   폰 내용 파일 — 여기만 고치면 폰 안 내용이 바뀌어요.
   · 따옴표 "" 안의 글자만 바꾸면 돼요.
   · 사진은 public 폴더에 넣고 "photo1.jpg"처럼 파일 이름을 적어요. (null이면 빈 색 타일)
   ───────────────────────────────────────────── */
window.PHONE = {
  /* 기본 정보 */
  owner: "박원빈",
  passcode: "0913",
  passHint: "힌트: 형 생일",
  time: "23:00",                 // 24시간 형식으로 적으면 화면엔 11:00으로 보여요
  dateText: "10월 23일 금요일",
  wallpaper: null,               // 예: "wallpaper.jpg"
  wifi: "home_5G",
  battery: 64,

  /* 홈 화면 위젯 */
  weather: { city: "서울", temp: 14, desc: "맑음", hi: 21, lo: 12 },

  /* 잠금화면 알림 — 형식: { app: "messenger", from: "성차니형❤️", text: "...", time: "방금" } */
  lockNotes: [],

  /* 잠금 푼 뒤 위에서 내려오는 알림 (delay = 몇 초 뒤) — 보통은 아래 incoming을 쓰면 돼요 */
  banners: [],

  /* ─────────── 시간이 지나면서 계속 오는 카톡 ───────────
     잠금을 푼 뒤 after초가 지나면 해당 방으로 메시지가 와요.
     · 그 방을 보고 있으면 "입력 중…" 말풍선이 움직이다가 나타나고
     · 다른 화면에 있으면 위에서 알림 배너가 내려오고 안 읽음 숫자가 올라가요
     형식:
       { chat: "성차니형❤️", after: 15, text: "..." }
       { chat: "성차니형❤️", after: 40, sticker: "😤" }
       { chat: "성차니형❤️", after: 70, img: 2 }            */
  incoming: [],

  /* ─────────── 카톡 대화방 ───────────
     대화방 설정 (넣고 싶은 것만):
       pinned: true          맨 위 고정
       hidden: true          목록에서 숨김 → 맨 아래 "숨긴 채팅방"에서만 보여요
       blocked: true         차단한 방
       notice: "..."         방 위 공지 (누르면 펼쳐짐)
       draft: "..."          입력창에 쓰다 만 문장 (가만히 남아 있음)
       draftLoop: ["..."]    입력창에 한 글자씩 썼다가 다 지웠다가 반복 (여러 개 넣으면 번갈아)
       profile: { status: "...", bg: "사진.jpg" }   프로필 사진 누르면 뜨는 화면
       photoReplies: ["..."] 앨범에서 사진을 보내면 상대가 입력 중… 후 차례로 하는 답장
       group: 7              단톡방 인원수 (있으면 단톡방)

     메시지 종류:
       { day: "2026년 10월 23일 금요일" }                     날짜 구분선
       { from: "them", text: "...", time: "오후 10:41" }      상대방
       { from: "me",   text: "...", time: "오후 10:42" }      원빈
       { from: "사람이름", text: "...", time: "..." }          단톡방의 다른 사람
       { ..., reply: { to: "me", text: "원래 메시지" } }       답장(인용)
       { from: "them", sticker: "😤", time: "..." }           이모티콘 (이모지 또는 "파일.png")
       { from: "me", voice: "0:12", src: "voice1.m4a", time: "..." }   음성메시지
       { from: "me", img: 3, time: "..." }                    사진 한 장 (숫자 = 사진 앱 몇 번째 사진)
       { from: "me", imgs: [1, 2, 3], time: "..." }           사진 여러 장 묶음
       { from: "them", deleted: true, time: "..." }          삭제된 메시지
       { from: "me", read: false, ... }                      안 읽음 '1' 표시
       { ..., live: true }   처음 방에 들어갈 때 "입력 중…" 후 나타나는 메시지 (맨 끝에 몰아서) */
  chats: [
    {
      name: "성차니형❤️", avatar: null, unread: 0, last: "", pinned: true,
      profile: { status: "경영학과 22" },
      draftLoop: ["형 햄버거 사갈까요"],
      messages: [
        { day: "2026년 10월 23일 금요일" }
      ]
    },
    { name: "체육교육과 23학번", group: 41, avatar: null, unread: 0, last: "", messages: [] },
    { name: "엄마", avatar: null, unread: 0, last: "", messages: [] },
    { name: "체육교육과 학생회", group: 12, avatar: null, unread: 0, last: "", messages: [] },
    { name: "아빠", avatar: null, unread: 0, last: "", messages: [] },
    { name: "교양 발표 3조", group: 4, avatar: null, unread: 0, last: "", messages: [] },
    { name: "형", avatar: null, unread: 0, last: "", messages: [] },
    { name: "전공 과제방", group: 5, avatar: null, unread: 0, last: "", messages: [] },
    { name: "축구 소모임", group: 18, avatar: null, unread: 0, last: "", messages: [] }
  ],

  /* 메모 — 형식: { title: "...", date: "어제", body: "..." }
     locked: true, code: "숫자4자리" 를 붙이면 비밀번호를 입력해야 열려요 */
  notes: [
    { title: "잠긴 메모", date: "10월 12일", locked: true, code: "0716", body: "" }
  ],

  /* 알람 */
  alarms: [
    { ampm: "오전", time: "9:30", label: "일어나", on: true }
  ],

  /* 사진 앱 — src에 파일 이름, caption에 날짜·설명 */
  photos: [
    { src: null, caption: "" }, { src: null, caption: "" }, { src: null, caption: "" },
    { src: null, caption: "" }, { src: null, caption: "" }, { src: null, caption: "" },
    { src: null, caption: "" }, { src: null, caption: "" }, { src: null, caption: "" }
  ],

  /* 캘린더 — events의 숫자는 날짜. 형식: "30": [{ title: "...", time: "하루 종일" }] */
  calendar: { year: 2026, month: 10, today: 23, events: {} },

  /* 전화 최근 통화 — type: "in" 받음, "out" 건 전화, "missed" 부재중 */
  calls: [],

  /* 사파리 */
  safari: {
    favorites: [["학", "학교 포털"], ["체", "체육교육과"], ["e", "e-러닝"], ["도", "도서관"]],
    recent: []
  }
};
