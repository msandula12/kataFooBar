describe('Foo Bar', function(){
	it("should return 1 when passed 1", function() {
		expect(fooBar(1)).toEqual(1);
	});
	it("should return 2 when passed 2", function() {
		expect(fooBar(2)).toEqual(2);
	});	
	it("should return 'foo' when passed 3", function() {
		expect(fooBar(3)).toEqual('foo');
	});
	it("should return 'foo' when passed 6", function() {
		expect(fooBar(6)).toEqual('foo');
	});
	it("should return 'bar' when passed 5", function() {
		expect(fooBar(5)).toEqual('bar');
	});
	it("should return 'bar' when passed 10", function() {
		expect(fooBar(10)).toEqual('bar');
	});
	it("should return 'foobar' when passed 15", function() {
		expect(fooBar(15)).toEqual('foobar');
	});
	it("should return 'foobar' when passed 30", function() {
		expect(fooBar(30)).toEqual('foobar');
	});	
});