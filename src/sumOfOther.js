function sumOfOther(array = [])
{
	let sum = array.reduce((sum,num) => (sum+num),0)

	return array.map((num, i,arr) => {
		return sum - num
	})

}
