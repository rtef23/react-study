#### webpack 설정
1. webpack4의 경우 development mode와 production mode를 기본으로 제공
	* 둘의 차이점은 development mode의 경우 minified가 되지 않고 production mode인 경우에만 minified가 처리됨
2. webpack4에서 기본으로 src 디렉토리에서 코드를 찾으며, 이 때 src디렉토리 하위에는 index.js가 있어야 한다.

* ####React Life Cycle>
* Render>
  componentWillMount() -> render() -> componentDidMount()

* Update>
  componentWillReceiveProps() -> shouldComponentUpdate() ->
  componentWillUpdate() -> render() -> componentDidUpdate()

> react에서는 기존 prop 값과 새 prop 값을 비교하여 값이 변경된 경우에만 Update를 실행한다.
> shouldComponentUpdate()에서 기존 prop 값과 새 prop 값을 비교

<React State>
  언제든지 Component의 State가 변경되면 react는 render를 다시 수행한다

#####  Smart Component VS Dumb Component

  * Smart Component
      : State가 있는 Component

  * Dumb Component
      : State가 없는 Component(Stateless Component)
        render() 함수가 없으며 Component의 라이프 사이클도 없다.
