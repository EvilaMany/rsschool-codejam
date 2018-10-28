module.exports = function recursion(tree,array = [])
{
	let lvl = [];
	let nextLvl = [];

	if(tree.value != undefined)
	{
		lvl.push(tree.value)
		for(let key in tree)
		{
			if(key == 'value')
				continue;
			nextLvl.push(tree[key])
		}
	}
	else
	{
		for(let branch in tree)
		{
			for(let key in tree[branch])
			{
				let val = tree[branch][key]
				if(typeof val == "number")
					lvl.push(val)
				else
					nextLvl.push(val)
			}
		}
	}

	if(lvl.length > 0)
		array.push(lvl)
	if(nextLvl.length > 0)
	{
		recursion(nextLvl).forEach((el) => array.push(el));
	} 
	return array
}
