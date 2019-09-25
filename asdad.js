const val = [{ number: 0, name: '다날' }, { number: 0, name: '우영' }, { number: 0, name: '윤석' }, { number: 0, name: '바보' }, { number: 0, name: '멍청이' }, { number: 0, name: '풉' }, { number: 0, name: '다날ㄴㅁㅇ' }, { number: 0, name: '다ㅁㄴㅇ날' }, { number: 0, name: 'ㅁㄴㅇ다날' }, { number: 0, name: '다ㅁㅇ날' }, { number: 1, name: '없음' }];

console.log(val.filter(key => key.number === 0));
/* [
    { number: 0, name: '다날' },
    { number: 0, name: '우영' },
    { number: 0, name: '윤석' },
    { number: 0, name: '바보' },
    { number: 0, name: '멍청이' },
    { number: 0, name: '풉' },
    { number: 0, name: '다날ㄴㅁㅇ' },
    { number: 0, name: '다ㅁㄴㅇ날' },
    { number: 0, name: 'ㅁㄴㅇ다날' },
    { number: 0, name: '다ㅁㅇ날' }
] */

console.log(val.filter(key => key.number === 1));
/* [
    { number: 1 }
] */