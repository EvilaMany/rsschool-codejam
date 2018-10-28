module.exports = function make(...args)
{
	//если переданы аргументы пред. вызова, разбираем массив по аргументам
	if(typeof args[0] == 'object') 
	{
		while(args[0].length != 0)
			args.splice(1,0,args[0].pop())
		
		args.splice(0,1)
	}
	//если передана функция, прогоняем через нее все аргументы и возвращаем
	if(typeof args[args.length-1] == 'function')
	{		
		let startValue = parseInt(args.splice(0,1));
		let handler = args.pop()
		
		return args.reduce((result,num) => handler(result,num),startValue)
	}
	else
	{
		return make.bind(null,args);
	}
}