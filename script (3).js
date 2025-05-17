const formulas = {
  뉴턴: {
    name: '뉴턴의 제2법칙',
    latex: 'F = ma',
    desc: '힘(F)은 질량(m)과 가속도(a)의 곱입니다.'
  },
  피타고라스: {
    name: '피타고라스의 정리',
    latex: 'a^2 + b^2 = c^2',
    desc: '직각삼각형에서 두 변의 제곱 합은 빗변 제곱과 같습니다.'
  },
  속도: {
    name: '속도 공식',
    latex: 'v = \\frac{d}{t}',
    desc: '속도(v)는 거리(d)를 시간(t)으로 나눈 값입니다.'
  },
  에너지: {
    name: '에너지 = 질량 × 빛의 속도²',
    latex: 'E = mc^2',
    desc: '아인슈타인의 질량-에너지 등가 공식입니다.'
  },
  전압: {
    name: '전압 공식 (옴의 법칙)',
    latex: 'V = IR',
    desc: '전압(V)은 전류(I)와 저항(R)의 곱입니다.'
  },
  면적_원: {
    name: '원의 면적',
    latex: 'A = \\pi r^2',
    desc: '반지름이 r인 원의 면적은 πr²입니다.'
  },
  둘레_원: {
    name: '원의 둘레',
    latex: 'C = 2\\pi r',
    desc: '반지름이 r인 원의 둘레는 2πr입니다.'
  },
  속력_평균: {
    name: '평균 속력',
    latex: '\\bar{v} = \\frac{\\Delta d}{\\Delta t}',
    desc: '전체 이동 거리 ÷ 전체 이동 시간'
  },
  중력_위치에너지: {
    name: '중력 위치 에너지',
    latex: 'E_p = mgh',
    desc: '위치 에너지는 질량 × 중력 가속도 × 높이입니다.'
  },
  운동에너지: {
    name: '운동 에너지',
    latex: 'E_k = \\frac{1}{2}mv^2',
    desc: '운동 중인 물체가 가지는 에너지입니다.'
  },
  부피_구: {
    name: '구의 부피',
    latex: 'V = \\frac{4}{3}\\pi r^3',
    desc: '반지름이 r인 구의 부피입니다.'
  },
  부피_원기둥: {
    name: '원기둥의 부피',
    latex: 'V = \\pi r^2 h',
    desc: '원기둥의 밑면 반지름과 높이를 곱해 부피를 구합니다.'
  },
  삼각형_넓이: {
    name: '삼각형의 넓이',
    latex: 'A = \\frac{1}{2}bh',
    desc: '밑변 × 높이 ÷ 2'
  },
  속도_운동량: {
    name: '운동량 공식',
    latex: 'p = mv',
    desc: '운동량은 질량 × 속도입니다.'
  },
  전력: {
    name: '전력 공식',
    latex: 'P = VI',
    desc: '전력(P)은 전압(V) × 전류(I)입니다.'
  },
  파동속도: {
    name: '파동 속도 공식',
    latex: 'v = f\\lambda',
    desc: '파동의 속도 = 진동수 × 파장'
  },
  광속도_굴절률: {
    name: '굴절률 공식',
    latex: 'n = \\frac{c}{v}',
    desc: '진공에서의 빛의 속도를 매질에서의 속도로 나눈 값입니다.'
  },
  이상기체: {
    name: '이상기체 상태방정식',
    latex: 'PV = nRT',
    desc: '이상기체의 상태를 나타내는 식입니다.'
  }
};

function searchFormula() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  const resultKey = Object.keys(formulas).find(key => key.includes(query));
  const output = document.getElementById('formulaResult');

  if (resultKey) {
    const formula = formulas[resultKey];

    output.innerHTML = `
      <h3 class="font-bold text-xl text-indigo-700 mb-2">${formula.name}</h3>
      <div class="text-gray-800 mb-2"> ${formula.desc} </div>
      <div class="text-2xl text-black">$$${formula.latex}$$</div>
    `;
    MathJax.typesetPromise(); // LaTeX 재렌더링
  } else {
    output.innerHTML = '';
    Swal.fire({
      title: '검색 결과 없음',
      text: '입력하신 키워드에 해당하는 공식을 찾을 수 없습니다.',
      icon: 'warning',
      confirmButtonColor: '#6366f1'
    });
  }
}
