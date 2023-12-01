const quotes = [
    {
        quote: "준비하지 않은 자는 기회가 와도 소용없다.",								
        author: "알렉시스 드 토크빌",
    },
    {
        quote: "노력에 집착하라숙명적인 노력을.",								
        author: "레오나르도 다 빈치",
    },
    {
        quote: "내일이란 오늘의 다른 이름일 뿐.",								
        author: "윌리엄 포크너",
    },
    {
        quote: "강인한 의지 없이는 뛰어난 재능도 없다.",								
        author: "오노레 드 발자크",
    },
    {
        quote: "나는 날마다 모든 면에서 점점 좋아지고 있다.",								
        author: "에밀쿠에",
    },
    {
        quote: "불가능한 일을 해보는 것은 신나는 일이다.",								
        author: "월트 디즈니",
    },
    {
        quote: "할 수 있다고 믿는 사람은 결국 그렇게 된다.",								
        author: "샤론 드골",
    },
    {
        quote: "당신이 포기할 때, 나는 시작한다.",								
        author: "엘론 머스크",
    },
    {
        quote: "나는 이룰 때까지 노력할 것이다.",								
        author: "브라이언 트레이시",
    },
    {
        quote: "한번 포기하면 습관이 된다절대 포기하지 말아라.",								
        author: "마이클 조던",
    },
    {
        quote: "나이가 성숙을 보장하지는 않는다.",								
        author: "라와나 블랙웰",
    },
    {
        quote: "성공은 꿈꾸고, 믿고, 대담해지고, 실천하는데서 오는 것이다.",								
        author: "존 디줄리어스 3세",
    },
    {
        quote: "삶은 당신이 만드는 것이다이전에도 그랬고 앞으로도 그럴 것이다.",								
        author: "그랜마 모세",
    },
    {
        quote: "행운의 여신은 용기 있는 자를 좋아한다.",								
        author: "버질",
    },
    {
        quote: "모험은 그 자체만으로도 해볼 만한 가치가 있다.",								
        author: "아멜리아 에어하트",
    },
    {
        quote: "숙련은 힘보다 더 강하다.",								
        author: "W.G.베넘",
    },
    {
        quote: "지나간 일로 미래를 설계할 수는 없다.",								
        author: "에드먼드 버크",
    },
    {
        quote: "꿈이 없다면 아무 일도 일어나지 않는다.",								
        author: "칼 샌드버그",
    },
    {
        quote: "내일이 곧 지금이다.",								
        author: "엘리너 루즈벨트",
    },
    {
        quote: "자기 신뢰 없이는 성공하지 못한다.",								
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "무엇을 시도할 용기도 없으면서 멋진 삶을 바란단 말인가.",								
        author: "반 고흐",
    },
    {
        quote: "가장 높이 나는 갈매기가 가장 멀리 본다.",								
        author: "리처드 바크",
    },
    {
        quote: "목표를 높게 잡아라그리고 도달할 때까지 멈추지 말라.",								
        author: "보 잭슨",
    },
    {
        quote: "슬기로운 자는 미래를 현재인 양 대비한다.",								
        author: "명심보감",
    },
    {
        quote: "행복은 습관이다그것을 몸에 지니라.",								
        author: "엘버트 허버드",
    },
    {
        quote: "기회는 새와 같은 것, 날아가기 전에 꼭 잡아라.",								
        author: "스마일즈",
    },
    {
        quote: "산다는 것 그것은 치열한 전투이다.",								
        author: "로망 롤랑",
    },
    {
        quote: "오늘 하나는 내일 둘의 가치가 있다.",								
        author: "벤자민 프랭클린",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",								
        author: "파울로 코엘료",
    },
    {
        quote: "꿈은 내일의 현실이다.",								
        author: "딘 마샬",
    },
    {
        quote: "남의 앞에 나서는 것을 두려워하지 말라.",								
        author: "엘마 윌러",
    },
    {
        quote: "실패도 배우는 것이 있으면 성공이다.",								
        author: "말콤 포브스",
    },
    {
        quote: "모범은 모든 사람이 읽을 수 있는 교훈이다.",								
        author: "웨스트",
    },
    {
        quote: "생각을 집중해야 바라던 결과를 얻을 수 있다.",								
        author: "지그 지글러",
    },
    {
        quote: "말도 행동이고 행동도 말의 일종이다.",								
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "시간은 언제 까지든 당신을 기다리는 것은 아니다.",								
        author: "짐멜",
    },
    {
        quote: "오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라.",								
        author: "마하트마 간디",
    },
    {
        quote: "인생의 본분은 전진이다.",								
        author: "S.존슨",
    },
    {
        quote: "실수를 두려워 말고 계속 도전하라.",								
        author: "전 시몬즈",
    },
    {
        quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",								
        author: "존 우든",
    },
    {
        quote: "장애가 크면 클수록 성취의 영광은 커지는 법이다.",								
        author: "몰리에르",
    },
    {
        quote: "앞서 가는 방법의 비밀은 시작하는 것이다.",								
        author: "마크 트웨인",
    },
    {
        quote: "건강은 제일의 재산이다.",								
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "때때로 우리는 너무 많이 생각하고, 너무 적게 느낀다.",								
        author: "찰리 채플린",
    },
    {
        quote: "가장 어두운 밤도 언젠간 끝나고 해는 떠오를 것이다.",								
        author: "반 고흐",
    },
    {
        quote: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",								
        author: "테오프라스토스",
    },
    {
        quote: "산다는 것은 호흡하는 것이 아니라 행동하는 것이다.",								
        author: "장 자크 루소",
    },
    {
        quote: "성공은 영원하지 않으며, 실패 역시 그러하다.",								
        author: "델 크로스워드",
    },
    {
        quote: "시간은 가장 희소가치가 있는 부족한 자원이다.",								
        author: "피터 드러커",
    },
    {
        quote: "결심은 인간 의지를 일깨우는 외침이다.",								
        author: "앤서니 로빈스",
    },
    {
        quote: "실패가 불가능한 것처럼 행동해라.",								
        author: "도로시아 브랜디",
    },
    {
        quote: "끝을 염두에 두고 시작하라.",								
        author: "스티븐 코비",
    },
    {
        quote: "테만을 즐기고 있을 때는 태만함을 느끼지 못한다.",								
        author: "가스가 센안",
    },
    {
        quote: "다른 사람의 좋은 습관을 내 습관으로 만들어라.",								
        author: "빌 게이츠",
    },
    {
        quote: "성공은 수만 번의 실패를 감싸준다.",								
        author: "조지 버나드 쇼",
    },
    {
        quote: "운은 계획에서 비롯된다.",								
        author: "브랜치 리키",
    },
    {
        quote: "이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다.",								
        author: "더글러스 맥아더",
    },
    {
        quote: "좋은 희망을 품는 것은 바로 그것을 이룰 수 있는 지름길이다.",								
        author: "루터",
    },
    {
        quote: "먼저 꿈이 있지 않으면 아무 일도 일어나지 않는다.",								
        author: "칼 샌드버그",
    },
    {
        quote: "성공은 매일 반복한 작은 노력들의 합니다.",								
        author: "로버트 콜리어",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;