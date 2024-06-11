import React from 'react';

//타입 선언
type InputType = 'text' | 'email' | 'file' | 'password' | undefined;
type InputSize = 'xs' | 'md' | 'lg' | undefined;

interface CommonInputProps {
	id?: string;
	styles?: string;
	size?: InputSize;
	type?: InputType;
	width?: string;
	placeholder?: string;
	disabled?: boolean;
}

/**
 * TypeScript에서는 함수 매개변수에 타입을 지정해 줄 수 있습니다.
 * 여기서 (false | null | undefined | string)[]는 classes 배열이 false, null, undefined, 또는 string 타입의 요소만을 포함하도록 강제하는 유니언 타입임.
 * - 이렇게 하면 classNames 함수가 예상대로 동작하면서도 타입 안전성이 유지.
 *
 * ? classNames 함수를 사용하는가?
 * - tailwind CSS는 많은 수의 유틸리티 클래스를 제공하고, 각 컴포넌트나 엘리먼트에 클래스들을 조합하여 사용.
 * - 따라서 한 엘리먼트에 여러 개의 클래스를 적용해야 하는 상황이 자주 발생하고, 이 클래스들 중 어떤 것은 조건부일 수도 있음. (예: 상태에 따라 변경₩되는 스타일).
 * - lassNames 함수는 이러한 상황을 처리하기 위한 함수.
 * - 이 함수는 여러 개의 인수(클래스 이름)를 받아서 하나의 문자열로 결합.
 * - 이때, 조건부로 클래스를 추가할 수 있도록 인수 중에서 'falsy'한 값을 제거하는 역할도 수행.
 * - 그 결과, 최종 문자열에는 실제로 적용하려는 클래스만 포함
 * @param classes
 * @returns
 */
function classNames(...classes: (false | null | undefined | string)[]) {
	// 'filter(Boolean)'는 배열에서 falsy 값을 제거합니다.
	// 'join(' ')'는 배열의 모든 항목을 하나의 문자열로 결합합니다.
	return classes.filter(Boolean).join(' ');
}

const InputDefault: React.FC<CommonInputProps> = ({ id, type, size, styles, width, placeholder, disabled }) => {
	let inputSize = '';

	//input 사이즈 정의
	switch (size) {
		case 'xs': {
			inputSize = 'h-8';
			break;
		}
		case 'md': {
			inputSize = 'h-10';
			break;
		}
		case 'lg': {
			inputSize = 'h-[50px]';
			break;
		}
	}
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			// ! 주어진 InputDefault 컴포넌트에서 width, inputSize 등의 class를 추가를 위한 변수 값이 존재할 경우에만 해당 클래스 값을 className에 추가하려면,
			// ! - classNames 함수를 사용하여 이를 쉽게 구현할 수 있습니다.
			// ! classNames 함수는 이미 주어진 코드에서 falsy 값들을 걸러내고 클래스 이름들을 결합하는 데 사용되고 있습니다.
			// className={`
			//   ${styles}
			//   ${inputSize}
			//   ${type === 'file' ? 'hidden' : ''}
			//   border border-solid border-gray-300 bg-white rounded-md`}
			className={classNames(
				styles,
				inputSize,
				type === 'file' ? 'hidden' : '',
				'border border-solid border-gray-300 bg-white rounded-md',
				width // 'width' 값이 있으면 이 위치에서 추가됩니다.
			)}
			disabled={disabled}
		/>
	);
};

export default InputDefault;