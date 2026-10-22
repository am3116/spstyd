/* ─────────────────────────────────────────────
   폰 내용 파일 — 여기만 고치면 폰 안 내용이 바뀌어요.
   · 따옴표 "" 안의 글자만 바꾸면 돼요.
   · 사진은 같은 폴더에 넣고 "photo1.jpg"처럼 파일 이름을 적어요. (null이면 빈 색 타일)
   · 지금 들어 있는 대사·메모는 전부 "형식 예시"예요. 원하는 내용으로 바꿔 쓰세요.
   ───────────────────────────────────────────── */
window.PHONE = {
  /* 기본 정보 */
  owner: "박원빈",              // 설정 앱 맨 위 이름
  passcode: "0913",              // 잠금 비밀번호 (숫자 4자리)
  passHint: "힌트: 형 생일",  // 두 번 틀리면 잠금화면에 나와요
  time: "1:24",
  dateText: "10월 23일 금요일",
  wallpaper: null,               // 예: "wallpaper.jpg"
  wifi: "home_5G",
  battery: 64,

  /* 홈 화면 위젯 */
  weather: { city: "서울", temp: 18, desc: "대체로 맑음", hi: 21, lo: 12 },

  /* 잠금화면 알림 (잠금 풀기 전에 보이는 것) */
  lockNotes: [
    { app: "messenger", from: "성차니형❤️", text: "예시) 자? 내일 몇 시에 봐?", time: "1시간 전" },
    { app: "clock", from: "알람", text: "오전 9:30 · 일어나", time: "어제" }
  ],

  /* 잠금 푼 뒤 위에서 내려오는 알림 (delay = 몇 초 뒤) */
  banners: [
    { delay: 6, app: "messenger", from: "성차니형❤️", text: "예시) 아 맞다 그거 봤어?", open: { app: "messenger", chat: "성차니형❤️" } }
  ],

  /* ─────────── 카톡 대화방 ───────────
     대화방 설정 (넣고 싶은 것만):
       pinned: true          맨 위 고정 (📌)
       hidden: true          목록에서 숨김 → 맨 아래 "숨긴 채팅방"에서만 보여요
       blocked: true         차단한 방 (입력창 대신 '차단한 친구입니다')
       notice: "..."         방 위 공지 (누르면 펼쳐짐)
       draft: "..."          입력창에 쓰다 만 문장 + 깜빡이는 커서
       profile: { status: "...", bg: "사진.jpg" }   프로필 사진 누르면 뜨는 상태메시지/배경
       photoReplies: ["...", "..."]   앨범에서 사진을 보내면 상대가 입력 중… 후 차례로 하는 답장
       group: 7              단톡방 인원수 (있으면 단톡방)

     메시지 종류:
       { day: "2026년 10월 22일 목요일" }                     날짜 구분선
       { from: "them", text: "...", time: "오후 7:06" }        상대방
       { from: "me",   text: "...", time: "오후 7:07" }        원빈
       { from: "사람이름", text: "...", time: "..." }          단톡방의 다른 사람
       { ..., reply: { to: "me", text: "원래 메시지" } }       답장(인용) — to: "me" / "them"
       { from: "them", sticker: "🥹", time: "..." }           이모티콘 (이모지 또는 "파일.png")
       { from: "me", voice: "0:12", src: "voice1.m4a", time: "..." }   음성메시지 (src 없으면 재생 흉내만)
       { from: "me", img: 3, time: "..." }                    사진 한 장 (숫자 = 사진 앱 몇 번째 사진)
       { from: "me", imgs: [1, 2, 3], time: "..." }           사진 여러 장 묶음
       { from: "them", deleted: true, time: "..." }          삭제된 메시지
       { from: "me", read: false, ... }                      안 읽음 '1' 표시
       { ..., live: true }   처음 방에 들어갈 때 "입력 중…" 말풍선이 움직이다가 나타나는 메시지 (맨 끝에 몰아서 쓰세요) */
  chats: [
    {
      name: "성차니형❤️", avatar: null, unread: 3, last: "오전 1:12", pinned: true,
      profile: { status: "예시) 경영학과 22" },
      draft: "예시) 형 근데 아까 그거",
      photoReplies: ["예시) 이거 언제 찍었어", "예시) ㅋㅋㅋㅋ 또 있어?"],
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "them", text: "예시) 오늘 수업 몇 시에 끝나", time: "오후 7:06" },
        { from: "me", text: "예시) 실기 끝나면 9시요", time: "오후 7:07" },
        { from: "them", text: "예시) 끝나고 편의점", time: "오후 7:07" },
        { from: "me", text: "예시) 콜", time: "오후 7:08", reply: { to: "them", text: "예시) 끝나고 편의점" } },
        { from: "them", sticker: "🫠", time: "오후 7:08" },
        { from: "me", imgs: [1, 2, 3], time: "오후 9:14" },
        { from: "them", deleted: true, time: "오후 9:20" },
        { from: "me", text: "예시) 뭐 지웠어요", time: "오후 9:21" },
        { from: "them", voice: "0:07", time: "오후 9:22" },
        { day: "2026년 10월 23일 금요일" },
        { from: "them", text: "예시) 자?", time: "오전 1:12", live: true },
        { from: "them", text: "예시) 내일 몇 시에 봐", time: "오전 1:12", live: true },
        { from: "them", text: "예시) 답장해", time: "오전 1:12", live: true }
      ]
    },
    {
      name: "체육교육과 23학번", group: 41, avatar: null, unread: 38, last: "어제",
      notice: "예시) 체육대회 10월 30일 오전 9시 대운동장 집합\n학과 티셔츠 필참",
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "과대", text: "예시) 공지 확인하신 분 이모지 눌러주세요", time: "오후 10:02" },
        { from: "동기 A", text: "예시) 넵", time: "오후 10:03" },
        { from: "me", text: "예시) 확인", time: "오후 10:05" }
      ]
    },
    {
      name: "엄마", avatar: null, unread: 0, last: "어제",
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "them", text: "예시) 밥은 먹었니", time: "오후 6:40" },
        { from: "me", text: "예시) 응 먹었어", time: "오후 6:52" }
      ]
    },
    {
      name: "체육교육과 학생회", group: 12, avatar: null, unread: 4, last: "어제",
      notice: "예시) 학생회비 납부 마감 10월 31일",
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "학생회장", text: "예시) 체육대회 물품 담당자 정해야 합니다", time: "오후 8:30" },
        { from: "me", text: "예시) 저 할게요", time: "오후 8:41" }
      ]
    },
    {
      name: "아빠", avatar: null, unread: 0, last: "어제",
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "them", text: "예시) 주말에 집 오냐", time: "오후 5:12" },
        { from: "me", text: "예시) 아마?", time: "오후 5:30" }
      ]
    },
    {
      name: "교양 발표 3조", group: 4, avatar: null, unread: 2, last: "어제",
      messages: [
        { day: "2026년 10월 22일 목요일" },
        { from: "조원 A", text: "예시) 자료 조사 나눠서 해요", time: "오후 4:05" },
        { from: "me", text: "예시) 저 2번 할게요", time: "오후 4:09" }
      ]
    },
    {
      name: "형", avatar: null, unread: 0, last: "10월 21일",
      messages: [
        { day: "2026년 10월 21일 수요일" },
        { from: "them", text: "예시) 엄마 생신 선물 반반 하자", time: "오후 9:00" },
        { from: "me", text: "예시) ㅇㅋ", time: "오후 9:04" }
      ]
    },
    {
      name: "전공 과제방", group: 5, avatar: null, unread: 0, last: "10월 20일",
      messages: [
        { day: "2026년 10월 20일 화요일" },
        { from: "조원 A", text: "예시) 발표 자료 언제까지 올리면 돼요?", time: "오후 3:10" },
        { from: "me", text: "예시) 일요일까지요", time: "오후 3:12" }
      ]
    },
    {
      name: "축구 소모임", group: 18, avatar: null, unread: 0, last: "10월 19일",
      messages: [
        { day: "2026년 10월 19일 월요일" },
        { from: "회장", text: "예시) 이번 주 토요일 경기 참석 투표 올렸어요", time: "오후 7:20" },
        { from: "me", text: "예시) 참석", time: "오후 7:31" }
      ]
    },
    {
      name: "예시) 차단한 사람", avatar: null, unread: 0, last: "9월 30일", blocked: true,
      messages: [
        { day: "2026년 9월 30일 수요일" },
        { from: "them", text: "예시) 마지막 메시지", time: "오후 11:40" }
      ]
    },
    {
      name: "예시) 숨긴 대화방", avatar: null, unread: 0, last: "10월 16일", hidden: true,
      messages: [
        { day: "2026년 10월 16일 금요일" },
        { from: "me", text: "예시) 숨겨둔 방이라 찾아야 보여요", time: "오전 2:03" }
      ]
    }
  ],

  /* 메모 — locked: true 면 code를 입력해야 열려요 */
  notes: [
    { title: "예시) 장보기", date: "어제", body: "예시)\n- 우유\n- 귤\n- 목캔디" },
    { title: "예시) 하고 싶은 말", date: "10월 19일", body: "예시) 여기에 메모 내용을 적으세요.\n줄바꿈은 이렇게 \\n 으로." },
    { title: "잠긴 메모", date: "10월 12일", locked: true, code: "0716",
      body: "예시) 비밀번호를 푼 사람만 보는 내용." }
  ],

  /* 알람 (켜기/끄기는 화면에서 눌러볼 수 있어요) */
  alarms: [
    { ampm: "오전", time: "9:30", label: "일어나", on: true }
  ],

  /* 사진 앱 */
  photos: [
    { src: null, caption: "예시) 10월 22일 · 연습실" },
    { src: null, caption: "예시) 10월 21일" },
    { src: null, caption: "예시) 10월 20일" },
    { src: null, caption: "예시) 10월 18일" },
    { src: null, caption: "예시) 10월 15일" },
    { src: null, caption: "예시) 10월 12일" },
    { src: null, caption: "예시) 10월 9일" },
    { src: null, caption: "예시) 10월 3일" },
    { src: null, caption: "예시) 9월 28일" }
  ],

  /* 캘린더 — events의 숫자는 날짜 */
  calendar: {
    year: 2026, month: 10, today: 23,
    events: {
      "23": [{ title: "예시) 연습", time: "오후 2:00" }],
      "16": [{ title: "예시) ★", time: "하루 종일" }],
      "31": [{ title: "예시) 할로윈", time: "하루 종일" }]
    }
  },

  /* 전화 최근 통화 — type: "in" 받음, "out" 건 전화, "missed" 부재중 */
  calls: [
    { name: "성차니형❤️", type: "missed", when: "오전 12:30" },
    { name: "엄마", type: "in", when: "어제" },
    { name: "성차니형❤️", type: "out", when: "어제" },
    { name: "070-****-1234", type: "missed", when: "목요일" },
    { name: "성차니형❤️ (3)", type: "out", when: "수요일" }
  ],

  /* 사파리 */
  safari: {
    favorites: [["학", "학교 포털"], ["체", "체육교육과"], ["e", "e-러닝"], ["도", "도서관"]],
    recent: ["예시) 편의점 신상", "예시) 목 아플 때 좋은 음료", "예시) 연습실 근처 맛집", "예시) 10월 23일 날씨"]
  }
};
