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

####  Smart Component VS Dumb Component

  * Smart Component
      : State가 있는 Component

  * Dumb Component
      : State가 없는 Component(Stateless Component)
        render() 함수가 없으며 Component의 라이프 사이클도 없다.

#### Hooks
##### useState, useEffect

* useState: state 값을 변경하는데 사용하는 함수
	* ex)
		<pre><code>
			import React, {useState} from "react";
			
			const TestComponent = () => {
				const [testState, setTestState] = useState({
	                value1 : "test value 1",
	                value2 : "test value 2"
	            });
	                    
	            const updateTestState = () => {
	                let newTestState = Object.assign({}, testState, {
	                    value3: "test value 3"
                    }); 
	                
	                setTestState(newTestState);
	            };
	            
	            return (
					&lt;button onClick={updateTestState}&gt;updateButton&lt;/button&gt;
	            );
			};
		</code></pre>

* useEffect: rendering 이후 실행하는 함수
	* 두번째 인자로 특정 state값의 변경시에만 실행하도록 설정 가능하다.
	* loading의 경우도 useEffect를 사용하여 제어가 가능하다.
	* Component 초기화시 한번만 호출되게 하기 위해서 useEffect에 watching할 state를 빈 배열을 넣는다.
		<pre><code>
			import React, {useState} from "react";
        			
            const TestComponent = () => {
                const [testState, setTestState] = useState({
                    value1 : "test value 1",
                    value2 : "test value 2"
                });
                        
                const updateTestState = () => {
                    let newTestState = Object.assign({}, testState, {
                        value3: "test value 3"
                    }); 
                    
                    setTestState(newTestState);
                };
                
                //useEffect의 두번째 인자로 빈 배열이 없는 경우, useEffect -> setTestState -> render -> useEffect -> setTestState -> render ... 가 호출 되게 된다.
                useEffect(() => {
                    let fetchedTestData = getTestData();
                    
                    setTestState(fetchedTestData);
                }, []);
                
                const getTestData = () => {
                    ...Get Data from Server...
                };
                
                return (
                    &lt;div&gt;{this.testState.value1} {this.testState.value2}&lt;/div&gt;
                );
            };
		
		</code></pre>

##### custom hook
* 함수명을 use를 prefix로 주어 해당 함수를 실행하면 rendering후 실행하도록 hook을 추가할 수 있다.
	
##### 컴포넌트간 state 전달
* state, state를 업데이트하는 함수 전달

##### Context API
* 전역으로 관리되어야 하는 값을 관리하는 용도로 사용하는듯...
* props로 계속해서 전달하지 않을 수 있음

useContext(CONTEXT)

##### useRef
useRef()
form 요소의 값을 가져올때 사용하는듯...
mutable한 값을 return하며 현재 값을 가져오기 위해서는 inputRef.current.value 형식으로 사용

##### Reducer
useReducer()
state를 관리하는 함수
<pre><code>
const testReducer = (testValues, {type, payload}) => {
	switch(type){
		case "ADD_TEST_DATUM":
		return [...testValues, convert_payload_func(payload)];
		case "SET_INIT_DATA":
		return payload;
		case "UPDATE_TEST_STATE":
		return testValues.map((testValue) => {
			let newTestValue;
		
			if(testValue.id === payload.id){
				newTestValue = Object.assign(newTestValue, {state: "updated test value"});
			}else{
				newTestValue = testValue;
			}
		});
		default:
		return ;
	}
};
</code></pre>