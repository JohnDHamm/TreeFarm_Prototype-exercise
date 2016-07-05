// Unit Tests

describe("The specification for tree farm functions", function(){

	// 1. There should be a Plant function defined.
	it("there should be a Plant function", function(){
		expect(Plant).toBeDefined();
	});

	// 2. There should be a Tree function defined.
	it("there should be a Tree function", function(){
		expect(Tree).toBeDefined();
	});

	// 3. There should be a function named increaseHeight on the prototype of Plant.
	it("there should be an increaseHeight function on the prototype of Plant", function(){
		expect(Plant.prototype.increaseHeight).toBeDefined();
	});

	// 4. There should be a function named decreaseHeight on the prototype of Plant.
	it("there should be a decreaseHeight function on the prototype of Plant", function(){
		expect(Plant.prototype.decreaseHeight).toBeDefined();
	})

	// 5. There should be a height property on Plant.
	it("there should be a height property on Plant", function() {
		let newPlant = new Plant();
		// expect(newPlant.height).toBe(null);
		expect(newPlant).toEqual(jasmine.objectContaining({
      height: null
    }))
	})

	// 6. There should be a function named grow on the prototype of Tree.
	it("there should be a grow function on the prototype of Tree", function(){
		expect(Tree.prototype.grow).toBeDefined();
	})
	// 7. There should be a function named trim on the prototype of Tree.
	it("there should be a trim function on the prototype of Tree", function(){
		expect(Tree.prototype.trim).toBeDefined();
	})

	// 8. When you invoke the trim method on Tree, the height of the Tree should be reduced by the integer value that is passed as an argument (e.g. PearTree.trim(2))
	it("when invoking trim method, height of tree should be reduced by argument amount", function(){
		let TestTree = new Tree();
		TestTree.height = 24;
		TestTree.trim(4);
		expect(TestTree.height).toBe(20);
	})

	// 9. When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
	it("when you invoke trim method, branches should be decreased by 1", function(){
		let TestTree3 = new Tree();
		TestTree3.branches = 6;
		TestTree3.trim(3);
		expect(TestTree3.branches).toBe(5);
	})

	// 10. When you invoke the grow method on Tree, the height of the Tree should be increased by the integer value that is passed as an argument (e.g. PearTree.grow(2))
	it("when invoking grow method, height of tree should be increased by argument amount", function(){
		let TestTree2 = new Tree();
		TestTree2.height = 40;
		TestTree2.grow(10);
		expect(TestTree2.height).toBe(50);
	})


})
