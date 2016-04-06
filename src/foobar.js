function fooBar(num){
	msg = '';
	if (num % 3 === 0) {
		msg += 'foo';
	}
	if (num % 5 === 0) {
		msg += 'bar';
	}
	return msg || num;
}