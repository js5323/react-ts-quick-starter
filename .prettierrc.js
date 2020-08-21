module.exports = {
  trailingComma: 'all', // 对象的最后一个属性末尾也会添加 , ，比如 { a: 1, b: 2 } 会格式为 { a: 1, b: 2, } 。
  tabWidth: 2, // 缩进大小。
  endOfLine: 'lf',
  printWidth: 120,
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always', //箭头函数的参数无论有几个，都要括号包裹。比如 (a) => {} ，如果设为 avoid ，会自动格式化为 a => {} 。
};
