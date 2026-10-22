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
  realTime: true,                // true = 실제 한국 시간으로 계속 흘러가요 / false = 아래 시간으로 고정
  time: "23:00",                 // realTime: false일 때 쓰는 시간 (24시간 형식, 화면엔 11:00)
  dateText: "10월 23일 금요일",   // realTime: false일 때 쓰는 날짜
  wallpaper: null,               // 홈 화면 배경 (null이면 기본 배경)
  lockWallpaper: "lock.jpg",     // 잠금화면 배경
  wifi: "home_5G",
  battery: 64,

  /* 홈 화면 위젯 */
  weather: { city: "서울", temp: 14, desc: "맑음", hi: 21, lo: 12 },

  /* 잠금화면 알림 — 형식: { app: "messenger", from: "성차니형❤️", text: "...", time: "방금" } */
  lockNotes: [
    { app: "messenger", from: "체육교육과 23학번", text: "과대 이서준: 접영 안 합니다 다들 진정하세요", time: "2분 전" },
    { app: "clock", from: "알람", text: "오전 9:30 · 일어나", time: "내일" }
  ],

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
    {
      "name": "체육교육과 23학번",
      "group": 41,
      "avatar": null,
      "unread": 27,
      "last": "오후 10:58",
      "notice": "체육대회 10월 30일(금) 오전 9시 대운동장 집합\n학과 단체티 필참, 운동화 필수\n불참자는 과대한테 개인톡",
      "messages": [
        {
          "day": "2026년 10월 22일 목요일"
        },
        {
          "from": "과대 이서준",
          "text": "공지 올림 확인하면 하트 눌러주세요 제발",
          "time": "오후 8:02"
        },
        {
          "from": "과대 이서준",
          "text": "단체티 사이즈 오늘까지 시트에 적어 안 적으면 그냥 L로 감",
          "time": "오후 8:02"
        },
        {
          "from": "정하은",
          "text": "L이면 나 원피스 되는데",
          "time": "오후 8:05"
        },
        {
          "from": "김태오",
          "text": "ㅋㅋㅋㅋㅋㅋㅋㅋ",
          "time": "오후 8:05"
        },
        {
          "from": "박민재",
          "text": "시트 링크 어딨음",
          "time": "오후 8:11"
        },
        {
          "from": "과대 이서준",
          "text": "공지에 있다고 민재야 ㅅㅂ",
          "time": "오후 8:12"
        },
        {
          "from": "박민재",
          "text": "아 ㅈㅅ",
          "time": "오후 8:12"
        },
        {
          "day": "2026년 10월 23일 금요일"
        },
        {
          "from": "최유나",
          "text": "내일 수영 실기 몇 시부터인지 아는 사람",
          "time": "오후 10:31"
        },
        {
          "from": "김태오",
          "text": "9시 반",
          "time": "오후 10:33"
        },
        {
          "from": "김태오",
          "text": "근데 출석 9시에 부른대",
          "time": "오후 10:33"
        },
        {
          "from": "최유나",
          "text": "아 ㅅㅂ 왜",
          "time": "오후 10:33"
        },
        {
          "from": "정하은",
          "text": "자유형 25m 기록 재는 거 맞지..?",
          "time": "오후 10:40"
        },
        {
          "from": "박민재",
          "text": "접영도 한다던데",
          "time": "오후 10:41"
        },
        {
          "from": "정하은",
          "text": "누가 구라라고 해줘",
          "time": "오후 10:41"
        },
        {
          "from": "김태오",
          "text": "구라",
          "time": "오후 10:42"
        },
        {
          "from": "정하은",
          "text": "ㄱㅅ 태오야 편안해졌어",
          "time": "오후 10:42"
        },
        {
          "from": "최유나",
          "sticker": "🫠",
          "time": "오후 10:43"
        },
        {
          "from": "박민재",
          "text": "나 물 개무서운데 체교 왜 왔냐",
          "time": "오후 10:47"
        },
        {
          "from": "김태오",
          "text": "그걸 4년째 고민 중이면 걍 운명임",
          "time": "오후 10:48"
        },
        {
          "from": "과대 이서준",
          "text": "접영 안 합니다 다들 진정하세요",
          "time": "오후 10:58"
        }
      ]
    },
    {
      "name": "축구 소모임",
      "group": 18,
      "avatar": null,
      "unread": 9,
      "last": "오후 10:50",
      "notice": "정기 경기 매주 토요일 오후 2시 / 회비 월 1만 원",
      "messages": [
        {
          "day": "2026년 10월 23일 금요일"
        },
        {
          "from": "회장 서윤호",
          "text": "내일 경기 참석 투표 마감함",
          "time": "오후 9:00"
        },
        {
          "from": "회장 서윤호",
          "text": "지금 9명이라 2명 더 필요함 ㅈㄴ 급함",
          "time": "오후 9:00"
        },
        {
          "from": "임재원",
          "text": "친구 하나 데려가도 됨?",
          "time": "오후 9:14"
        },
        {
          "from": "회장 서윤호",
          "text": "야르 환영",
          "time": "오후 9:15"
        },
        {
          "from": "배준혁",
          "text": "근데 내일 비 온다던데",
          "time": "오후 10:31"
        },
        {
          "from": "임재원",
          "text": "30%면 하는 거지",
          "time": "오후 10:35"
        },
        {
          "from": "배준혁",
          "text": "작년에 30%라 했다가 진흙탕에서 굴렀잖아",
          "time": "오후 10:36"
        },
        {
          "from": "회장 서윤호",
          "text": "비 와도 합니다",
          "time": "오후 10:50"
        }
      ]
    },
    {
      "name": "교양 발표 3조",
      "group": 4,
      "avatar": null,
      "unread": 6,
      "last": "오후 10:15",
      "messages": [
        {
          "day": "2026년 10월 22일 목요일"
        },
        {
          "from": "조장 김나연",
          "text": "발표 다음 주 화요일이라 PPT 일요일까지 합쳐야 해요",
          "time": "오후 7:10"
        },
        {
          "from": "조장 김나연",
          "text": "1·2번 자료조사, 3번 PPT, 4번 발표로 나눌까요?",
          "time": "오후 7:10"
        },
        {
          "from": "이도윤",
          "text": "저 PPT 할게요",
          "time": "오후 7:22"
        },
        {
          "day": "2026년 10월 23일 금요일"
        },
        {
          "from": "조장 김나연",
          "text": "혹시 자료조사 올리신 분 있나요?",
          "time": "오후 10:02"
        },
        {
          "from": "조장 김나연",
          "text": "드라이브에 아직 아무것도 없어서요",
          "time": "오후 10:02"
        },
        {
          "from": "조장 김나연",
          "text": "ㅎㅎ",
          "time": "오후 10:03"
        },
        {
          "from": "이도윤",
          "text": "저는 템플릿 먼저 만들어 둘게요",
          "time": "오후 10:09"
        },
        {
          "from": "조장 김나연",
          "text": "도윤님 사랑해요 진짜",
          "time": "오후 10:15"
        }
      ]
    },
    {
      "name": "체육교육과 학생회",
      "group": 12,
      "avatar": null,
      "unread": 4,
      "last": "오후 9:47",
      "notice": "학생회비 납부 마감 10월 31일\n체육대회 물품 리스트는 노션에 정리",
      "messages": [
        {
          "day": "2026년 10월 23일 금요일"
        },
        {
          "from": "학생회장 한지원",
          "text": "체육대회 물품 다시 체크할게요",
          "time": "오후 9:20"
        },
        {
          "from": "학생회장 한지원",
          "text": "줄다리기 줄, 계주 바통, 이온음료 2박스, 구급상자",
          "time": "오후 9:20"
        },
        {
          "from": "부회장 오승훈",
          "text": "바통 작년에 하나 잃어버려서 3개밖에 없음 ㅋㅋ",
          "time": "오후 9:24"
        },
        {
          "from": "학생회장 한지원",
          "text": "누가 잃어버렸는지 안 물어볼게",
          "time": "오후 9:25"
        },
        {
          "from": "부회장 오승훈",
          "text": "...ㅈㅅ합니다",
          "time": "오후 9:25"
        },
        {
          "from": "총무 윤서아",
          "text": "간식 예산 남은 거 18만 원이요",
          "time": "오후 9:40"
        },
        {
          "from": "부회장 오승훈",
          "text": "닭강정 가자 닭강정",
          "time": "오후 9:41"
        },
        {
          "from": "총무 윤서아",
          "text": "야르 근데 회의 때 투표해요 ㅋㅋ",
          "time": "오후 9:47"
        }
      ]
    },
    { name: "엄마", avatar: null, unread: 0, last: "", messages: [] },
    { name: "아빠", avatar: null, unread: 0, last: "", messages: [] },
    { name: "형", avatar: null, unread: 0, last: "", messages: [] },
    {
      "name": "전공 과제방",
      "group": 5,
      "avatar": null,
      "unread": 0,
      "last": "어제",
      "messages": [
        {
          "day": "2026년 10월 22일 목요일"
        },
        {
          "from": "송지호",
          "text": "운동생리학 레포트 몇 장이었지",
          "time": "오후 4:12"
        },
        {
          "from": "강민서",
          "text": "A4 5장 이상 참고문헌 빼고",
          "time": "오후 4:15"
        },
        {
          "from": "송지호",
          "text": "참고문헌 빼고 ㅅㅂ",
          "time": "오후 4:15"
        },
        {
          "from": "송지호",
          "text": "교수님 우리한테 왜 그러셔",
          "time": "오후 4:15"
        },
        {
          "from": "강민서",
          "text": "젖산 역치 파트 내가 할게",
          "time": "오후 4:20"
        },
        {
          "from": "송지호",
          "text": "그럼 난 심폐지구력 ㄱㄱ",
          "time": "오후 4:21"
        }
      ]
    }
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
  calendar: {
    year: 2026, month: 10, today: 23,
    events: {
      "24": [{ title: "수영 실기 평가", time: "오전 9:30" }, { title: "축구 소모임 경기", time: "오후 2:00" }],
      "27": [{ title: "교양 조별 발표", time: "오전 10:30" }],
      "28": [{ title: "운동생리학 레포트 마감", time: "오후 11:59" }],
      "30": [{ title: "체육대회", time: "하루 종일" }],
      "31": [{ title: "학생회비 납부 마감", time: "하루 종일" }]
    }
  },

  /* 전화 최근 통화 — type: "in" 받음, "out" 건 전화, "missed" 부재중 */
  calls: [],

  /* 사파리 */
  safari: {
    favorites: [["학", "학교 포털"], ["체", "체육교육과"], ["e", "e-러닝"], ["도", "도서관"]],
    recent: []
  }
};
