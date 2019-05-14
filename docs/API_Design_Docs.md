# 토이프로젝트 API Docs
___

이 문서는 토이프로젝트 구현에 필요한 API 설계 단계에서 작성중인 문서입니다.

설계 확정 전까진 자유롭게 수정 가능하며 수정 하기 전과 수정 이후 팀원들에게 알려주시기 바랍니다.

OAuth로 회원가입 & 로그인 하는 부분에 대해서는 공부 후에 작성하도록 하겠습니다. 혹여나 먼저 터득하신 분이 계시다면 작성 부탁드립니다.

Parameter에 사용한 표시는 아래의 의미로 사용한 것입니다.

  - '' : 문자열
  - 0 : 숫자
  - [] : 배열
  - {} : 객체 



## 1. 회원가입
___


URL

```

```



Parameters

```

```



Response

```

```



## 2. 로그인
___


URL

```

```



Parameters

```

```



Response

```

```



## 3. 모임 만들기
___


URL

```
HTTP : POST
Request : /gathering
```



Parameters 

```
header: {
  Authorization: 'access token'
}

body:{
  name:'',
  tags: '', //'#tag1#tag2...' 의 문자열 형태로 입력
  genderOpt: 0, //설정레벨 0: 제한없음, 1: 남자, 2: 여자 
  ageOpt: 0, //설정레벨 0: 제한없음, 1: 10대, 2: 20대, 3: 30대, ....
  group: '',
  location: 
  {
    lat: 0.0, 
    lng: 0.0
  }
}
```



Response

```
//data-type : json	
{
  code : 0, //응답코드 200,400
  message : ''
}
```



## 4. 모임찾기
___


URL

```
HTTP : GET
Request : /gathering
```



Parameters 

```

[required]
keyword : '', // 입력된 단어가 포함된 모임이름 or 모임키워드 검색용

[options]
genderOpt: 0, //null, 0: 제한없음, 1: 남자, 2: 여자 
ageOpt: 0, //null, 0: 제한없음, 1: 10대, 2: 20대, 3: 30대, ....
group : //null, ''

```



Response

```
//data-type : json	
{
  code: 0,
  list: 
  [
    {
    	name: '',
    	tags: '',
    	genderOpt: 0,
    	ageOpt: 0,
    	group: ''
    	location: 
        {
    		lat: 0.0,
    		lng: 0.0
  		}
  	},
    ...
  ]
}
```

